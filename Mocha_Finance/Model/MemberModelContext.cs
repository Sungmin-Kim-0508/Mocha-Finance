using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mocha_Finance.Model
{
    public class MemberModelContext
    {
        public Member GetMemberByName(string email, string password)
        {
            Member selectedMember = null;
            try
            {
                StockDBContext sContext = new StockDBContext();
                selectedMember = sContext.Members.FirstOrDefault(m => m.UserName == email && m.Password==password);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting member");
                throw ex;
            }
            return selectedMember;
        }
        public int AddMember(Member newMember)
        {
            try
            {
                StockDBContext sContext = new StockDBContext();
                sContext.Members.Add(newMember);
                sContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting selectedProject");
                throw ex;
            }

            return newMember.MemberID;
        }
        // Get my favourite by member id
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
                Console.WriteLine("Problem with getting selectedProject");
                throw ex;
            }
            return favList;
        }
        // Get my favourite by member id
        public MyFavourite GetMyFavouriteByMemberID(int memberId)
        {
            MyFavourite mf;
            try
            {
                StockDBContext sContext = new StockDBContext();
                mf = sContext.MyFavouries.FirstOrDefault(m => m.MemberID == memberId);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting selectedProject");
                throw ex;
            }
            return mf;
        }
        public void AddStockToMyFavByMemberID(int memberid, string stockName)
        {

            try
            {
                Stock nStock = new Stock();
                nStock.StockID = -1;
                nStock.StockName = stockName;
                nStock.StockPrice = 123.45;
                nStock.MyFavouriteID = GetMyFavouriteByMemberID(memberid).MyFavouriteID;
                StockDBContext sContext = new StockDBContext();
                sContext.Stocks.Add(nStock);
                sContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting selectedProject");
                throw ex;
            }
        }

    }

}
