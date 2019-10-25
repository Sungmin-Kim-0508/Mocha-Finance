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
                selectedMember = sContext.Members.FirstOrDefault(m => m.Email == email && m.Password==password);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting member");
                throw ex;
            }
            return selectedMember;
        }
        public Member GetMemberByID(int id)
        {
            Member selectedMember = null;
            try
            {
                StockDBContext sContext = new StockDBContext();
                selectedMember = sContext.Members.FirstOrDefault(m => m.MemberID == id);
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
                newMember.MemberID = -1;
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
        public int AddMember()//(Member newMember)
        {
            Member nnn = new Member("test@email", "123");

            try
            {
                //Member nnn = new Member("test@email", "123");
                StockDBContext sContext = new StockDBContext();
                sContext.Members.Add(nnn);
                sContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting selectedProject");
                throw ex;
            }

            return nnn.MemberID;
        }

    }

}
