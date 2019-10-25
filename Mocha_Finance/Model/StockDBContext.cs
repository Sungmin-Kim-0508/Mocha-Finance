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
        public DbSet<MyFavourite> Historicals { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // microsoftentityframecore tools 2.1.1
            //optionsBuilder.UseSqlServer(@"Server = myServerAddress; Database = myDataBase; User Id = myUsername; Password = myPassword;");
            string dbname = "stockdb4.cjjkk6bktycj.us-east-1.rds.amazonaws.com";
            string username = "admin";
            string password = "123456789";
            optionsBuilder.UseSqlServer(@"Server = stockdb4.cjjkk6bktycj.us-east-1.rds.amazonaws.com; Database = stockdb4; User Id = admin; Password = 123456789;");
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
                .HasForeignKey(c => c.MyFavouriteID);

            modelBuilder.Entity<Historical>()
                .HasOne(f => f.Stock)
                .WithMany(d => d.Historicals)
                .HasForeignKey(c => c.StockID);
        }
    }
}
