﻿using System;
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
            // 1. If email doesn't exist, return null.

            // 2. If password isn't valid, return null.

            // 3. If username and password are valid, return email and MyFavourite.
            Member loginMember = mContext.GetMemberByName(e,p);
            if (loginMember != null)
                return true;
            else
                return false;
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