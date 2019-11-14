using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mocha_Finance.Model;


namespace Mocha_Finance.Controllers
{
    [Route("api/[controller]")]
    public class StockController : Controller
    {
        StockModelContext sContext = new StockModelContext();

        [HttpGet("[action]")]
        public Stock GetSingleStockByStockID(int id)
        {
            Stock nStock = sContext.GetSingleStockByStockID(id);

            if (nStock != null)
                return nStock;
            else
                return new Stock();
        }
        [HttpPost("[action]")]
        public int AddStockByFavIDAndStockSymbol(int favid, string symbol)
        {
            return sContext.AddStock(favid, symbol);
        }

        [HttpGet("[action]")]
        public List<Stock> GetStocksByFavID(int favID)
        {
            List<Stock> stocks = sContext.GetAllStockByFavID(favID);
            return stocks;
        }

        //https://localhost:44379/api/Stock/GetAllStockByMemberID?memId=3
        //   public List<Stock> GetAllStockByMemberID(int memId)
        [HttpGet("[action]")]
        public List<Stock> GetAllStockByMemberID(int memId)
        {
            List<Stock> stocks = sContext.GetAllStockByMemberID(memId);
            return stocks;
        }

    }
}