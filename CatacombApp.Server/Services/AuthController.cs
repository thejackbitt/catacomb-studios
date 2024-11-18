using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CatacombApp.Server.Services;
using CatacombApp.Server.Models;
using Azure.Identity;

namespace CatacombApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly TokenService _tokenService;
        private readonly IEmailService _emailService;

        public AuthController(UserService userService, TokenService tokenService, IEmailService emailService)
        {
            _userService = userService;
            _tokenService = tokenService;
            _emailService = emailService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] string username, [FromForm] string email, [FromForm] string password, [FromForm] int profilePic = 0)
        {
            await _userService.RegisterUser(username, email, password, profilePic);
            return Ok("User registered successfully.");
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateUser([FromBody] UserUpdateRequest request)
        {
            var userUuid = HttpContext.Session.GetString("UserUuid");

            if (string.IsNullOrEmpty(userUuid))
            {
                return Unauthorized("No active session. Please log in.");
            }

            var user = await _userService.GetUserByUuidAsync(userUuid);

            if (user == null)
            {
                return NotFound("User not found.");
            }

            user.Email = request.NewEmail;
            user.Pfp = request.NewProfilePic - 1;

            var result = await _userService.UpdateUser(user);

            if (result)
            {
                HttpContext.Session.SetString("UserEmail", user.Email);
                HttpContext.Session.SetString("UserPfp", user.Pfp.ToString());

                return Ok("User details updated successfully.");
            }
            else
            {
                return StatusCode(500, "Failed to update user details.");
            }
        }

        [HttpPost("change-email")]
        public async Task<IActionResult> ChangeEmail([FromForm] string token)
        {
            var principal = _tokenService.ValidateToken(token);
            if (principal == null)
            {
                return BadRequest("Invalid or expired token.");
            }
            var userIdString = principal.FindFirst("userId")?.Value;
            var newEmail = principal.FindFirst("newEmail")?.Value;

            if (!int.TryParse(userIdString, out int userId))
            {
                return BadRequest("Invalid user ID.");
            }
            var user = await _userService.GetUserByIdAsync(userId);
            if (user == null)
            {
                return NotFound("User not found.");
            }
            user.Email = newEmail;
            await _userService.UpdateUser(user);

            return Ok("Email updated successfully.");
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromForm] string token, [FromForm] string newPassword)
        {
            var principal = _tokenService.ValidateToken(token);
            if (principal == null)
            {
                return BadRequest("Invalid or expired token.");
            }

            var userIdString = principal.FindFirst("userId")?.Value;
            if (!int.TryParse(userIdString, out int userId))
            {
                return BadRequest("Invalid user ID.");
            }

            var user = await _userService.GetUserByIdAsync(userId);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            var hashedPassword = _userService.HashPassword(user, newPassword);
            user.PasswordHash = hashedPassword;
            await _userService.UpdateUser(user);

            return Ok("Password updated successfully.");
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] string email, [FromForm] string password)
        {
            var user = await _userService.VerifyPassword(email, password);
            if (user != null && user.Uuid != null && user.UserName != null && user.Pfp != null)
            {
                HttpContext.Session.SetString("UserUuid", user.Uuid.ToString());
                HttpContext.Session.SetString("UserEmail", user.Email);
                HttpContext.Session.SetString("UserName", user.UserName);
                HttpContext.Session.SetString("UserPfp", user.Pfp.ToString());

                return Ok($"Login successful. User {user.Uuid}, AKA {user.UserName} is currently logged in with profile picture #{user.Pfp}.");
            }
            else
            {
                return Unauthorized("Invalid credentials.");
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Ok("Logout successful.");
        }

        [HttpGet("session")]
        public IActionResult GetSessionInfo()
        {
            var userUuid = HttpContext.Session.GetString("UserUuid");
            var userEmail = HttpContext.Session.GetString("UserEmail");
            var userName = HttpContext.Session.GetString("UserName");
            var userPfp = HttpContext.Session.GetString("UserPfp");

            if (userUuid != null)
            {
                return Ok(new
                {
                    Uuid = userUuid,
                    Email = userEmail,
                    Username = userName,
                    ProfilePic = userPfp
                });
            } else
            {
                return Unauthorized("No active session.");
            }
        }

        [HttpPost("remove")]
        public async Task<IActionResult> Remove([FromForm] string email, [FromForm] string password)
        {
            var user = await _userService.VerifyPassword(email, password);
            if (user != null)
            {
                await _userService.DeleteUser(email);

                return Ok($"Account removed successfully. Your account has been deleted.");
            }
            else
            {
                return Unauthorized("Invalid credentials.");
            }
        }

        [HttpPost("send")]
        public async Task<IActionResult> SendEmail([FromForm] string recipientEmail, [FromForm] string subject, [FromForm] string body)
        {
            await _emailService.SendEmailAsync(recipientEmail, subject, body);
            return Ok("Email sent successfully.");
        }


        [HttpPost("send-email-change")]
        public async Task<IActionResult> SendEmailChangeNotification([FromForm] string userName, [FromForm] string oldEmail, [FromForm] string newEmail, [FromForm] string userId)
        {
            await _emailService.SendEmailChangeNotificationAsync(userName, oldEmail, newEmail, userId);
            return Ok("Email change notification sent.");
        }

        [HttpPost("send-password-change")]
        public async Task<IActionResult> RequestPasswordReset([FromForm] string email)
        {
            var user = await _userService.GetUserByEmailAsync(email);
            if (user == null)
            {
                return NotFound("User with this email not found.");
            }

            await _emailService.SendPasswordChangeLinkAsync(user.UserName, user.Email, user.Uuid.ToString());
            return Ok("Password reset link sent.");
        }


    }
}
