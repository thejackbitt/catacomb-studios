using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CatacombApp.Server.Services;
using CatacombApp.Server.Models;

namespace CatacombApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly UserService _userService;

        public AuthController(UserService userService)
        {
            _userService = userService;
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


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] string email, [FromForm] string password)
        {
            var user = await _userService.VerifyPassword(email, password);
            if (user != null)
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

    }
}
