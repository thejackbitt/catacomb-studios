using Microsoft.AspNetCore.Identity;

namespace CatacombApp.Server.Models
{
    public class User : IdentityUser
    {
        public int Uuid { get; set; }

        public int Pfp { get; set; } = 0;

    }
}
