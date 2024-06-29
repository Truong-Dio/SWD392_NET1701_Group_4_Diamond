using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DataLayer.Models
{
    public class DiamondStoreSystemDBContext : DbContext
    {
        public DbSet<Accessory> Accessories { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Diamond> Diamonds { get; set; }
        public DbSet<Diamond> Orders { get; set; }
        public DbSet<SubDiamond> SubDiamonds { get; set; }
        public DbSet<Warranty> Warranties { get; set; }
        public DbSet<Product> Products { get; set; }

        private string GetConnectionString()
        {
            IConfiguration config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", true, true)
                .Build();
            var strConn = config.GetConnectionString("DefaultConnection");
            return strConn;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(GetConnectionString());
            }
        }
    }
}
