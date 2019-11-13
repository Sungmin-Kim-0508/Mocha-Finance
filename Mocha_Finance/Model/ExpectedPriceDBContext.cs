using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Mocha_Finance.Model
{
    public class ExpectedPriceDBContext
    {
       public string InitialReadFromURL()
        {
            string json = "hi";
      
            string URL = "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL";
            try
            {
                URLStockModel uModel = JsonConvert.DeserializeObject<URLStockModel>(URL);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            
            return json;
        }

    }
}
