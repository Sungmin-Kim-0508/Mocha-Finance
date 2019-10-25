using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mocha_Finance.Model
{
    public class Member
    {
        [Key]
        public int MemberID { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public ICollection<MyFavourite> MyFavourites { get; set; }

        public Member(string e, string p)
        {
            Email = e;
            Password = p;
        }

    }
}
