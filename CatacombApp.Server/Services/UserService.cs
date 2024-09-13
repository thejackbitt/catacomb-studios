using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using CatacombApp.Server.Models;
using System.Threading.Tasks;

namespace CatacombApp.Server.Services
{
    public class UserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher<User> _passwordHasher;

        public UserService(ApplicationDbContext context, IPasswordHasher<User> passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        public class RegistrationResult
        {
            public bool IsSuccess { get; set; }
            public string Message { get; set; }
        }


        public async Task<RegistrationResult> RegisterUser(string username, string email, string password, int profilePic = 0)
        {
            var existingUser = await _context.Users.SingleOrDefaultAsync(u => u.Email == email);
            if (existingUser != null)
            {
                return new RegistrationResult
                {
                    IsSuccess = false,
                    Message = "An account with this email already exists."
                };
            }

            int lastUuid = await _context.Users.MaxAsync(u => (int?)u.Uuid) ?? 0;
            int newUuid = lastUuid + 1;

            var user = new User
            {
                Uuid = newUuid,
                Pfp = profilePic,
                UserName = username,
                Email = email
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return new RegistrationResult
            {
                IsSuccess = true,
                Message = "Registration successful."
            };
        }



        public async Task<User> VerifyPassword(string email, string enteredPassword)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return null;
            }

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, enteredPassword);
            return result == PasswordVerificationResult.Success ? user : null;
        }

        public async Task<bool> DeleteUser(string email)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return false;
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return true;
        }


    }
}
