using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Mocha_Finance.Model
{
    public class ExpectedPriceDBContext
    {
       public string InitialReadFromURL()
       {
            string json = "hi";
            List<double> priceList = new List<double>();

            string URL = "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL";

            using (WebClient wc = new WebClient())
            {
                var jsonFile = wc.DownloadString(URL);
                var items = JsonConvert.DeserializeObject<URLStockModel>(jsonFile);
                foreach (HistoricalURL h in items.historical)
                {
                  //  Console.WriteLine(h.close);
                    priceList.Add(h.close);
                }
            }
            List<double> prices = findExpectedPrice(100, 25, priceList);



            return json;
       }
        private static double CalculateStdDev(IEnumerable<double> values)
        {
            double ret = 0;
            if (values.Count() > 0)
            {
                //Compute the Average      
                double avg = values.Average();
                //Perform the Sum of (value-avg)_2_2      
                double sum = values.Sum(d => Math.Pow(d - avg, 2));
                //Put it all together      
                ret = Math.Sqrt((sum) / (values.Count() - 1));
            }
            return ret;
        }
        public static List<double> findExpectedPrice(int p, double day, List<double> priceList)
        {
            List<double> prices = new List<double>();

            int startPoint = priceList.Count - p;
            // int i = p ; i <count < i++
            double days = day / 252.0;
            List<double> logList = new List<double>();
            double standardDev = 0;

            for (int i = startPoint + 1; i < priceList.Count - 1; i++)
            {
                double temp = priceList[i + 1] / priceList[i];
                logList.Add(Math.Log(temp));
            }
            standardDev = CalculateStdDev(logList);
            Console.WriteLine("standardDev is " + standardDev);
            double vol_year = standardDev * (Math.Pow(252, 0.5));
            Console.WriteLine("vol year is " + vol_year);

            double mu = logList.Average() * 252;
            double future_up = priceList[priceList.Count - 1] * (Math.Exp(mu * days + vol_year * Math.Pow(days, 0.5)));
            double future_down = priceList[priceList.Count - 1] * (Math.Exp(mu * days - vol_year * Math.Pow(days, 0.5)));
            double currentPrice = priceList[priceList.Count - 1];

            Console.WriteLine("current Price is " + currentPrice);
            Console.WriteLine("future Up Price is " + future_up);
            Console.WriteLine("future Down Price is " + future_down);

            prices.Add(currentPrice);
            prices.Add(future_up);
            prices.Add(future_down);
            return prices;
            
        }

    }
}
