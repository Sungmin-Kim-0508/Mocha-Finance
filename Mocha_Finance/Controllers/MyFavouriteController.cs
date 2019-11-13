using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mocha_Finance.Model;

namespace Mocha_Finance.Controllers
{
  
    [Route("api/[controller]")]
    public class MyFavouriteController : Controller
    {
        MyFavouriteModelContext mContext = new MyFavouriteModelContext();

        [HttpGet("[action]")]
        public MyFavourite GetMyFavourite(int memID, int favID)
        {
            MyFavourite nFav = mContext.GetSingleMyFavourite(memID, favID);
            return nFav;

        }

        [HttpGet("[action]")]
        public List<MyFavourite> GetMyFavouriteList(int memID)
        {
            List<MyFavourite> nFav = mContext.GetMyFavouritesByMemberID(memID);
            return nFav;
        }

        [HttpPost("[action]")]
        public MyFavourite AddMyFavourite(int memID, string favname)
        {
            MyFavourite mFav = new MyFavourite();
            mFav.MemberID = memID;
            mFav.MyFavouriteName = favname;
            int returnedID = mContext.AddFavouriteGroup(memID, favname);
            MyFavourite returnFav = mContext.GetSingleMyFavourite(memID, returnedID);
            return returnFav;
        }

       
    }
}