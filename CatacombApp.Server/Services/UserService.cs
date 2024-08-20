using Microsoft.AspNetCore.Identity;
using CatacombApp.Server.Models;
using System.Linq;

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

        public void RegisterUser(string username, string email, string password)
        {
            var user = new User
            {
                UserName = username,
                Email = email
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, password);

            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public bool VerifyPassword(string email, string enteredPassword)
        {
            var user = _context.Users.SingleOrDefault(u => u.Email == email);

            if (user == null)
            {
                return false;
            }

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, enteredPassword);
            return result == PasswordVerificationResult.Success;
        }
    }
}
