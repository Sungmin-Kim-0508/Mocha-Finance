﻿using System;
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
        //[HttpPost("[action]")]
        //public Member AddNewStockToFavourite(int favGroupID, string symbol)
        //{
        //    //Member nMemeber = new Member();
        //    //nMemeber.Email = e;
        //    //nMemeber.Password = p;
        //    //int returnedID = mContext.AddMember(nMemeber);
        //    //Member nnMemeber = mContext.GetMemberByID(returnedID);
        //    //return nnMemeber;
        //}

    }
}