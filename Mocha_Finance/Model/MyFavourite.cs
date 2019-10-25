
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Mocha_Finance.Model
{
    public class MyFavourite
    {
        [Key]
        public int MyFavouriteID { get; set; }
        public string MyFavouriteName { get; set; }
        public int? MemberID { get; set; }
        public Member Member { get; set; }

        public ICollection<Stock> Stocks { get; set; }

        public MyFavourite(int mId, string MyFavouriteName)
        {
            this.MemberID = mId;
            this.MyFavouriteName = MyFavouriteName;
        }
    }
}
