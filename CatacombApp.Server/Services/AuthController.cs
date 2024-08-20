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

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] string email, [FromForm] string password)
        {
            var user = await _userService.VerifyPassword(email, password);
            if (user != null)
            {
                return Ok($"Login successful. User {user.Uuid} is currently logged in with profile picture #{user.Pfp}.");
            }
            else
            {
                return Unauthorized("Invalid credentials.");
            }
        }
    }
}
