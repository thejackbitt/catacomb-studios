using CatacombApp.Server.Services;
using Microsoft.AspNetCore.Mvc;

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
        public IActionResult Register([FromForm] string username, [FromForm] string email, [FromForm] string password)
        {
            _userService.RegisterUser(username, email, password);
            return Ok("User registered successfully.");
        }

        [HttpPost("login")]
        public IActionResult Login([FromForm] string email, [FromForm] string password)
        {
            if (_userService.VerifyPassword(email, password))
            {
                return Ok("Login successful.");
            }
            else
            {
                return Unauthorized("Invalid credentials.");
            }
        }
    }
}
