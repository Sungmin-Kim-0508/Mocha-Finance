using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mocha_Finance.Model;

namespace Mocha_Finance.Controllers
{

    [Route("api/[controller]")]
    public class UserController : Controller
    {
<<<<<<< HEAD
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
=======
        MemberModelContext mContext = new MemberModelContext();

        //[HttpGet("[action]")]
        //public IEnumerable<User> Login(string e, string p)
        //{
        //    if ((email.Equals(e)) && (password.Equals(p)))
        //    {
        //        return Enumerable.Range(1, 5).Select(index => new User
        //        {
        //            email = "abc@gmail.com",
        //            password = "password"
        //        }); ;
        //    }
        //    else
        //    {
        //        return Enumerable.Range(1, 5).Select(index => new User
        //        {
        //            email = "NO",
        //            password = "NO"
        //        }); ;
        //    }
        //}
        [HttpGet("[action]")]
>>>>>>> 40cd6d9b80f0be43c64f792fdaaf53821b4ae90f
        public bool Login2(string e, string p)
        {
            Member loginMember = mContext.GetMemberByName(e);
            if (loginMember != null)
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
    //public class User
    //{
    //    public string email { get; set; }
    //    public string password { get; set; }
    //}
}