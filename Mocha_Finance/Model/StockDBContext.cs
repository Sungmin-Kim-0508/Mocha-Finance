using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.SqlServer;


namespace Mocha_Finance.Model
{
    public class StockDBContext: DbContext
    {
        public DbSet<Member> Members { get; set; }
        public DbSet<Stock> Stocks { get; set; }
        public DbSet<MyFavourite> MyFavouries { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string dbname = "database-1.c36vccvb9elc.us-east-2.rds.amazonaws.com";
            string username = "";
            string password = "";
            string hostname = "";
            string port = "1521";
            string connectionString = "Data Source=" + hostname + ";Initial Catalog=" + dbname + ";User ID=" + username + ";Password=" + password + ";";


        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MyFavourite>()
                .HasOne(f => f.Member)
                .WithMany(b => b.MyFavourites)
                .HasForeignKey(a => a.MemberID);

            modelBuilder.Entity<Stock>()
                .HasOne(f => f.MyFavourite)
                .WithMany(d => d.Stocks)
                .HasForeignKey(c => c.StockID);
        }
    }
}
