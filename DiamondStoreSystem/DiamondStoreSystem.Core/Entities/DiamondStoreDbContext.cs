using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DiamondStoreSystem.Common.Enum;

namespace DiamondStoreSystem.DTO.Entities
{
    public class DiamondStoreDbContext : DbContext
    {
        public DiamondStoreDbContext() : base()
        {
        }


        public DbSet<Account> Accounts { get; set; }
        public DbSet<Accessory> Accessories { get; set; }
        public DbSet<Diamond> Diamonds { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DiamondStoreDbContext(DbContextOptions<DiamondStoreDbContext> options) : base(options)
        {
            
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true).Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnetion"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Accessory>().HasData(
        new Accessory { AccessoryID = "ACC001", AccessoryName = "Necklace", Description = "Silver necklace with diamond pendant", Material = Material.SterlingSilver, Style = Style.Pendant, Brand = "ABC Jewelry", Block = false, Price = 100.00, UnitInStock = 50 }
    );

            modelBuilder.Entity<Account>().HasData(
                new Account { AccountID = "ACC001", Email = "example@email.com", Password = "Pa$$w0rd", LastName = "Smith", FirstName = "John", Phone = 1234567890, Address = "123 Main Street", Gender = "Male", DOB = new DateTime(1990, 1, 1), JoinDate = new DateTime(2023, 5, 15), LoyaltyPoint = 100, Block = false }
            );

            modelBuilder.Entity<Order>().HasData(
                new Order { OrderID = "ORD001", OrderStatus = OrderStatus.Pending, DateOrdered = new DateTime(2023, 6, 1), DateReceived = null, TotalPrice = 200.00, AccountID = "ACC001", PayMethod = PayMethod.CreditCard, Block = false }
            );

            modelBuilder.Entity<OrderDetail>().HasData(
                new OrderDetail { OrderDetailID = "OD001", DiamondID = "DIA001", OrderID = "ORD001", Quantity = 2, Price = 150.00, AccessoryID = "ACC001" }
            );

            modelBuilder.Entity<Diamond>().HasData(
                new Diamond { DiamondID = "DIA001", Origin = "Africa", LabCreated = LabCreated.Natural, TablePercent = 60.0, DepthPercent = 61.2, Description = "Round brilliant cut diamond", GIAReportNumber = 1234567890, IssueDate = new DateTime(2023, 5, 1), Shape = Shape.Round, CaratWeight = 1.5, ColorGrade = ColorGrade.E, ClarityGrade = ClarityGrade.VS1, CutGrade = Grade.Excellent, PolishGrade = Grade.Excellent, SymmetryGrade = Grade.Excellent, FluoresceneGrade = Grade.Good, Inscription = "None", Height = 5.75, Width = 5.75, Length = 5.75, Price = 1000.00, Block = false, UnitInStock = 10, SKU = "DIA001-SG" },
                new Diamond { DiamondID = "DIA002", Origin = "Africa", LabCreated = LabCreated.Natural, TablePercent = 60.0, DepthPercent = 61.2, Description = "Round brilliant cut diamond", GIAReportNumber = 1234567891, IssueDate = new DateTime(2023, 5, 1), Shape = Shape.Round, CaratWeight = 1.5, ColorGrade = ColorGrade.E, ClarityGrade = ClarityGrade.VS1, CutGrade = Grade.Excellent, PolishGrade = Grade.Excellent, SymmetryGrade = Grade.Excellent, FluoresceneGrade = Grade.Good, Inscription = "None", Height = 5.75, Width = 5.75, Length = 5.75, Price = 1000.00, Block = false, UnitInStock = 10, SKU = "DIA501-SG" }
            );
        }
    }
}
