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
        public Member GetMemberByMemberID(Member member)
        {
            Member selectedMember = mContext.GetMemberByID(member.MemberID);
            return selectedMember;
        }



        [HttpPost("[action]")]
        public Member Login(string e, string p)
        {
            Member loginMember = mContext.GetMemberByName(e,p);
            
            if (loginMember != null)
                return loginMember;
            else
                return new Member();
        }

        [HttpGet("[action]")]
        public string ValidateLogin(string e, string p)
        {
            string msg = mContext.ValidateLogin(e, p);
            return msg;
        }


        [HttpPost("[action]")]
        public Member Register(string e, string p)
        {
            Member nMemeber = new Member();
            nMemeber.Email = e;
            nMemeber.Password = p;
            int returnedID = mContext.AddMember(nMemeber);
            Member nnMemeber = mContext.GetMemberByID(returnedID);
            return nnMemeber;
        }


    }
}