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
        public string Test()
        {
            string s = eContext.InitialReadFromURL();
            int sss = s.Length;
            return s;

        }

    }
}