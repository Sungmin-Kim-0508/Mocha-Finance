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

        public string ValidateLogin(string email, string password)
        {
            string msg = "";
            Member selectedMember = null;
            Member selectedMember2 = null;
            try
            {
                StockDBContext sContext = new StockDBContext();
                selectedMember = sContext.Members.FirstOrDefault(m => m.Email == email);
                if (selectedMember == null)
                {
                    msg = "Email Does not exist";
                } 
                else
                {
                    selectedMember2 = sContext.Members.FirstOrDefault(m => m.Email == selectedMember.Email && m.Password == password);
                    if (selectedMember2 == null)
                    {
                        msg = "Wrong Password";
                    }
                }

            }
            catch(Exception ex)
            {
                Console.WriteLine("Problem validating a login");
                throw ex;
            }
            return msg;

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
     
    }

}
