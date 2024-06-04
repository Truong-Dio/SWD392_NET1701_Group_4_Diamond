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
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductDiamond> ProductDiamonds { get; set; }
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
                new Accessory
                {
                    AccessoryID = "A1",
                    AccessoryName = "Necklace",
                    Description = "A beautiful necklace",
                    Material = Material.SterlingSilver,
                    Style = Style.Straps,
                    Brand = "BrandA",
                    Status = true
                },
                new Accessory
                {
                    AccessoryID = "A2",
                    AccessoryName = "Bracelet",
                    Description = "A stylish bracelet",
                    Material = Material.Fabric,
                    Style = Style.Shake,
                    Brand = "BrandB",
                    Status = true
                }
            );

            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    AccountID = "Acc1",
                    Email = "user1@example.com",
                    Password = "password1",
                    LastName = "Doe",
                    FirstName = "John",
                    Phone = 1234567890,
                    Address = "123 Main St",
                    Gender = "Male",
                    DOB = new DateTime(1990, 1, 1),
                    JoinDate = new DateTime(2020, 1, 1),
                    LoyaltyPoint = null,
                    Status = true,
                    Role = Role.Customer
                },
                new Account
                {
                    AccountID = "Acc2",
                    Email = "user2@example.com",
                    Password = "password2",
                    LastName = "Smith",
                    FirstName = "Jane",
                    Phone = 9876543210,
                    Address = "456 Elm St",
                    Gender = "Female",
                    DOB = new DateTime(1992, 2, 2),
                    JoinDate = new DateTime(2021, 2, 2),
                    LoyaltyPoint = 20,
                    Status = true,
                    Role = Role.SalesStaff
                }
            );

            modelBuilder.Entity<Diamond>().HasData(
                new Diamond
                {
                    DiamondID = "D1",
                    Origin = "Africa",
                    LabCreated = LabCreated.Artificial,
                    TablePercent = 60.0f,
                    DepthPercent = 40.0f,
                    Description = "A flawless diamond",
                    GIAReportNumber = 12345,
                    IssueDate = new DateTime(2021, 1, 1),
                    Shape = Shape.Round,
                    CaratWeight = 1.2f,
                    ColorGrade = ColorGrade.Z,
                    ClarityGrade = ClarityGrade.I3,
                    CutGrade = Grade.Poor,
                    PolishGrade = Grade.Fair,
                    SymmetryGrade = Grade.Poor,
                    FluoresceneGrade = Grade.Poor,
                    Inscription = "Inscription1",
                    Height = 5.0f,
                    Width = 5.0f,
                    Length = 5.0f,
                    Status = true
                },
                new Diamond
                {
                    DiamondID = "D2",
                    Origin = "Russia",
                    LabCreated = LabCreated.Natural,
                    TablePercent = 58.0f,
                    DepthPercent = 42.0f,
                    Description = "A perfect diamond",
                    GIAReportNumber = 67890,
                    IssueDate = new DateTime(2022, 2, 2),
                    Shape = Shape.Princess,
                    CaratWeight = 1.5f,
                    ColorGrade = ColorGrade.X,
                    ClarityGrade = ClarityGrade.I1,
                    CutGrade = Grade.Good,
                    PolishGrade = Grade.VeryGood,
                    SymmetryGrade = Grade.Good,
                    FluoresceneGrade = Grade.Excellent,
                    Inscription = "Inscription2",
                    Height = 6.0f,
                    Width = 6.0f,
                    Length = 6.0f,
                    Status = true
                }
            );

            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    ProductID = "P1",
                    ProductName = "Gold Ring",
                    ProductDescription = "A stunning gold ring",
                    SKU = "GR001",
                    UnitInStock = 100,
                    AccessoryId = "A1",
                    Status = true
                },
                new Product
                {
                    ProductID = "P2",
                    ProductName = "Silver Necklace",
                    ProductDescription = "A beautiful silver necklace",
                    SKU = "SN001",
                    UnitInStock = 50,
                    AccessoryId = "A2",
                    Status = true
                }
            );

            modelBuilder.Entity<Order>().HasData(
                new Order
                {
                    OrderID = "O1",
                    OrderStatus = Common.Enum.OrderStatus.Confirmed,
                    DateOrdered = new DateTime(2023, 1, 1),
                    DateReceived = new DateTime(2023, 1, 10),
                    TotalPrice = 200.0,
                    AccountID = "Acc1",
                    Status = true
                },
                new Order
                {
                    OrderID = "O2",
                    OrderStatus = Common.Enum.OrderStatus.Pending,
                    DateOrdered = new DateTime(2023, 2, 2),
                    DateReceived = new DateTime(2023, 2, 12),
                    TotalPrice = 150.0,
                    AccountID = "Acc2",
                    Status = true
                }
            );

            modelBuilder.Entity<OrderDetail>().HasData(
                new OrderDetail
                {
                    OrderDetailID = "OD1",
                    ProductID = "P1",
                    OrderID = "O1",
                    Quatity = 2,
                    Price = 100.0,
                    Status = true
                },
                new OrderDetail
                {
                    OrderDetailID = "OD2",
                    ProductID = "P2",
                    OrderID = "O2",
                    Quatity = 1,
                    Price = 150.0,
                    Status = true
                }
            );

            modelBuilder.Entity<ProductDiamond>().HasData(
                new ProductDiamond
                {
                    ProductDiamondID = "PD1",
                    DiamondID = "D1",
                    ProductID = "P1",
                    DiamondQuantity = 3,
                    Status = true
                },
                new ProductDiamond
                {
                    ProductDiamondID = "PD2",
                    DiamondID = "D2",
                    ProductID = "P2",
                    DiamondQuantity = 2,
                    Status = true
                }
            );
        }
    }
}
