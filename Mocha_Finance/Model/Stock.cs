using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Mocha_Finance.Model
{
    public class Stock
    {
        [Key]
        public int StockID { get; set; }
        //  public string StockName { get; set; }
        public string Symbol { get; set; }

        public int? MyFavouriteID { get; set; }
        public MyFavourite MyFavourite { get; set; }
        public ICollection<Historical> Historicals { get; set; }


    }
}
