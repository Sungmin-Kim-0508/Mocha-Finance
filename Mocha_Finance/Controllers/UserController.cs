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
        public bool Login2(string e, string p)
        {
            Member loginMember = mContext.GetMemberByName(e,p);
            if (loginMember != null)
                return true;
            else
                return false;
        }

        


    }
}