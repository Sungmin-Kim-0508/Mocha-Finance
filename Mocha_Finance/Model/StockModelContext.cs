﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mocha_Finance.Model
{
    public class StockModelContext
    {
        public int AddStock(int favGroupID, string symbol)
        {
            Stock nStock = new Stock();
            try
            {
                nStock.Symbol = symbol;
                nStock.MyFavouriteID = favGroupID;
                StockDBContext sContext = new StockDBContext();
                sContext.Stocks.Add(nStock);
                sContext.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting selectedProject");
                throw ex;
            }
            return nStock.StockID;
        }
        public List<Stock> GetAllStockByFavID(int favID)
        {
            List<Stock> stockInFav = new List<Stock>();
            try
            {
                StockDBContext sContext = new StockDBContext();
                stockInFav = sContext.Stocks.Where(s => s.MyFavouriteID.Equals(favID)).ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine("error in Getting all projects");

                throw ex;
            }
            return stockInFav;
        }

        public Stock GetSingleStockByStockID(int stockid)
        {
            Stock stock;
            try
            {
                StockDBContext sContext = new StockDBContext();
                stock = sContext.Stocks.FirstOrDefault(m => m.StockID == stockid);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Problem with getting single Fav");
                throw ex;
            }
            return stock;
        }

        public List<Stock> GetAllStockByMemberID(int memId)
        {
            List<Stock> lStock = new List<Stock>();
            try
            {
                StockDBContext sContext = new StockDBContext();
                MyFavouriteModelContext fContext = new MyFavouriteModelContext();
                List<MyFavourite> nFav = fContext.GetMyFavouritesByMemberID(memId);
                foreach(MyFavourite m in nFav){
                    List<Stock> tempStockList = new List<Stock>();
                    tempStockList = sContext.Stocks.Where(s=>s.MyFavouriteID.Equals(m.MyFavouriteID)).ToList();
                    foreach(Stock st in tempStockList)
                    {
                        lStock.Add(st);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw ex;
            }
            return lStock;
        }
    }
}
