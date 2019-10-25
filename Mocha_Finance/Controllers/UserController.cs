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

        MemberModelContext mContext = new MemberModelContext();

        [HttpGet("[action]")]
        public bool Login(string e, string p)
        {
            Member loginMember = mContext.GetMemberByName(e,p);
            if (loginMember != null)
                return true;
            else
                return false;
        }

        /*
         *  Controller Name     : Register
            HTTP METHOD         : POST
            ROUTE               : /api/User/Register
            Params              : email, password
            TODO                : 
        */

        [HttpPost("[action]")]
        public Member Register(string e, string p)
        {
            Member nMember = new Member();
            nMember.Email = e;
            nMember.Password = p;
            Member returnedMember;

            int memberID = mContext.AddMember(nMember);
            returnedMember = mContext.GetMemberByID(memberID);
        

            return returnedMember;
        }




    }
}