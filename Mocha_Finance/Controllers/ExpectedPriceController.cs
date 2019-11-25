using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mocha_Finance.Model;


namespace Mocha_Finance.Controllers
{
    [Route("api/[controller]")]
    public class ExpectedPriceController : Controller
    {
        ExpectedPriceDBContext eContext = new ExpectedPriceDBContext();

        [HttpGet("[action]")]
        public List<double> getFuturePrices(string stockSymbol, int numberOfDataToUse, double futuredays)
        {
            //string stockSymbol = "aapl";
            //int numberOfDataToUse = 100;
            //double futuredays = 5;
            List<double> prices = eContext.findFuturePrices(stockSymbol, numberOfDataToUse, futuredays);
            return prices;
        }

        [HttpGet("[action]")]
        public List<double> getGraphData()
        {
            return eContext.getGraphData();
        }

    }
}