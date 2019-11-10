using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mocha_Finance.Model
{
    public class MyFavouriteModelContext
    {
       // Get All FAV Groups
        public List<MyFavourite> GetMyFavouritesByMemberID(int memberId)
        {
            List<MyFavourite> favList;
            try
            {
                StockDBContext sContext = new StockDBContext();
                favList = sContext.MyFavouries.Where(m => m.MemberID == memberId).ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting Fav Groups");
                throw ex;
            }
            return favList;
        }
        // Get Single Fav Group
        public MyFavourite GetSingleMyFavourite(int memberId, int favID)
        {
            MyFavourite fav;
            try
            {
                StockDBContext sContext = new StockDBContext();
                fav = sContext.MyFavouries.FirstOrDefault(m => m.MyFavouriteID == favID && m.MemberID== memberId);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting single Fav");
                throw ex;
            }
            return fav;
        }

        // Add Fav Group to Member
        public int AddFavouriteGroup(int memberId, string favName)
        {
            MyFavourite mFav = new MyFavourite();
            mFav.MemberID = memberId;
            mFav.MyFavouriteName = favName;
            try
            {
                StockDBContext sContext = new StockDBContext();
                sContext.MyFavouries.Add(mFav);
                sContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with adding FavouriteGroup");
                throw ex;
            }
            return mFav.MyFavouriteID;
        }


        public int DeleteFavouriteGroup(int id)
        {
            int favDeleted = -1;

            try
            {
                StockDBContext sContext = new StockDBContext();
                MyFavourite deletedFav = sContext.MyFavouries.FirstOrDefault(f => f.MyFavouriteID == id);
                sContext.MyFavouries.Remove(deletedFav);
                favDeleted = sContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return favDeleted;
        }



    }
}
