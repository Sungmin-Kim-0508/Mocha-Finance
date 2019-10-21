using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Mocha_Finance.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        string email = "abc@gmail.com";
        string password = "password";

        [HttpPost("[action]")]
        public IEnumerable<User> Login(string e, string p)
        {
            if ((email.Equals(e)) && (password.Equals(p)))
            {
                return Enumerable.Range(1, 5).Select(index => new User
                {
                    email = "abc@gmail.com",
                    password = "password"
                }); ;
            }
            else
            {
                return Enumerable.Range(1, 5).Select(index => new User
                {
                    email = "NO",
                    password = "NO"
                }); ;
            }
        }

        [HttpPost("[action]")]
        public bool Login2(string e, string p)
        {
            if ((email.Equals(e)) && (password.Equals(p)))
                return true;
            else
                return false;
        }

        [HttpGet("[action]")]
        public string Login3(string e, string p)
        {
            if ((email.Equals(e)) && (password.Equals(p)))
                return "user Exists";
            else
                return "User Does not Exist";
        }

    }
    public class User
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}