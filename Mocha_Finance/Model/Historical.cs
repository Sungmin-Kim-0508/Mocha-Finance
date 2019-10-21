using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mocha_Finance.Model
{
    public class Historical
    {
        [Key]
        public int HistoricalID { get; set; }
        public DateTime date { get; set; }
        public double open { get; set; }
        public double high { get; set; }
        public double low { get; set; }
        public double close { get; set; }
        public string volumn { get; set; }
        public Stock Stock { get; set; }
        public int? StockID { get; set; }

    }
}
