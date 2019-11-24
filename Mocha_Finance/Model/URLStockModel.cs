using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mocha_Finance.Model
{
    public class URLStockModel
    {
        public string symbol { get; set; }
        public List<HistoricalURL> historical { get; set; }
    }
}
