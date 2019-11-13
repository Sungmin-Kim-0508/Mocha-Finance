using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mocha_Finance.Model
{
    public class URLStockModel
    {
        [JsonProperty("symbol")]
        public string symbol { get; set; }
        [JsonProperty("historical")]
        public List<HistoricalURL> historical { get; set; }
    }
}
