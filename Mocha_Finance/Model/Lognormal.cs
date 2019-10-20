using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Mocha_Finance.Model
{
    public class Lognormal
    {
        [Key]
        public int LognormalID { get; set; }
        public string StockName { get; set; }
        public double StockPrice { get; set; }
        public DateTime Date { get; set; }
        public double StockPriceUp { get; set; }
        public double StockPriceDown { get; set; }
    }
}
