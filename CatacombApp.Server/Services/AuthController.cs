using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CatacombApp.Server.Services;
using CatacombApp.Server.Models;
using MailKit.Net.Smtp;
using MimeKit;

namespace CatacombApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;

        private readonly IEmailService _emailService;

        public AuthController(IEmailService emailService, UserService userService)
        {
            _emailService = emailService;
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] string username, [FromForm] string email, [FromForm] string password, [FromForm] int profilePic = 0)
        {
            var result = await _userService.RegisterUser(username, email, password, profilePic);

            if (!result.IsSuccess)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error occurred during user registration.");
            }

            return Ok("User registered successfully.");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] string email, [FromForm] string password)
        {
            var user = await _userService.VerifyPassword(email, password);
            if (user != null)
            {
                HttpContext.Session.SetInt32("UserUuid", user.Uuid);
                HttpContext.Session.SetString("UserEmail", user.Email);
                HttpContext.Session.SetInt32("UserPfp", user.Pfp);
                HttpContext.Session.SetString("UserName", user.UserName);

                return Ok($"Login successful. User {user.Uuid} is currently logged in with profile picture #{user.Pfp}.");
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
            var userUuid = HttpContext.Session.GetInt32("UserUuid");
            var userEmail = HttpContext.Session.GetString("UserEmail");
            var userPfp = HttpContext.Session.GetInt32("UserPfp");
            var userName = HttpContext.Session.GetString("UserName");

            if (userUuid != null)
            {
                return Ok(new
                {
                    Uuid = userUuid,
                    Email = userEmail,
                    ProfilePic = userPfp,
                    Username = userName
                });
            }
            else
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


    }

    public class EmailRequest
    {
        public string RecipientEmail { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }

    // SAMPLE PAYLOAD

    // {  "recipientEmail": "user@example.com",  "subject": "Welcome to Our Service!", "body": "<p>Dear User,</p><p>Thank you for registering with us. We're excited to have you on board!</p><p>Best regards,<br>Your Company Team</p>"
}
