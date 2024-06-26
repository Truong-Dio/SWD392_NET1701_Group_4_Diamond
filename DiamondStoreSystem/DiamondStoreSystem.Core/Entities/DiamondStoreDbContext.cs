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
using System.Security.Cryptography;
using DiamondStoreSystem.Common;

namespace DiamondStoreSystem.DTO.Entities
{
    public class DiamondStoreDbContext : DbContext
    {
        public DbSet<Accessory> Accessories { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Diamond> Diamonds { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<VnPaymentResponse> VnPaymentResponses { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true).Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure the relationships for Order and Account
            modelBuilder.Entity<Order>()
                .HasOne(o => o.Account)
                .WithMany(a => a.Orders)
                .HasForeignKey(o => o.AccountID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Order>()
                .HasOne(o => o.EmployeeAccount)
                .WithMany()
                .HasForeignKey(o => o.EmployeeAssignID)
                .OnDelete(DeleteBehavior.Restrict);

            // Add dummy data
            modelBuilder.Entity<Accessory>().HasData(
                new Accessory
                {
                    AccessoryID = "A001",
                    AccessoryName = "Gold Ring",
                    Description = "A beautiful gold ring",
                    Material = Material.HypoallergenicMetals,
                    Style = Style.Ring,
                    Brand = "BrandA",
                    Block = false,
                    Price = 500.0,
                    UnitInStock = 10
                },
                new Accessory
                {
                    AccessoryID = "A002",
                    AccessoryName = "Silver Necklace",
                    Description = "A shiny silver necklace",
                    Material = Material.Fabric,
                    Style = Style.Ring,
                    Brand = "BrandB",
                    Block = false,
                    Price = 200.0,
                    UnitInStock = 15
                }
            );

            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    AccountID = "C001",
                    Email = "customer1@example.com",
                    Password = Util.HashPassword("password"),
                    LastName = "Doe",
                    FirstName = "John",
                    Phone = 1234567890,
                    Address = "123 Main St",
                    Gender = Gender.Male,
                    DOB = new DateTime(1990, 1, 1),
                    JoinDate = new DateTime(2020, 1, 1),
                    LoyaltyPoint = 100,
                    Block = false,
                    Role = Role.Customer,
                    WorkingSchedule = WorkingSchedule.Morning
                },
                new Account
                {
                    AccountID = "E001",
                    Email = "employee1@example.com",
                    Password = Util.HashPassword("password"),
                    LastName = "Smith",
                    FirstName = "Jane",
                    Phone = 9876543210,
                    Address = "456 Elm St",
                    Gender = Gender.Female,
                    DOB = new DateTime(1985, 5, 15),
                    JoinDate = new DateTime(2019, 5, 15),
                    Block = false,
                    Role = Role.SalesStaff,
                    WorkingSchedule = WorkingSchedule.Afternoon
                },
                new Account
                {
                    AccountID = "E002",
                    Email = "admin@example.com",
                    Password = Util.HashPassword("password"),
                    LastName = "Smith",
                    FirstName = "Jane",
                    Phone = 9876543210,
                    Address = "456 Elm St",
                    Gender = Gender.Female,
                    DOB = new DateTime(1985, 5, 15),
                    JoinDate = new DateTime(2019, 5, 15),
                    Block = false,
                    Role = Role.Admin,
                    WorkingSchedule = WorkingSchedule.Afternoon
                }
            );

            modelBuilder.Entity<Diamond>().HasData(
                new Diamond
                {
                    DiamondID = "D001",
                    Origin = "South Africa",
                    LabCreated = LabCreated.Artificial,
                    TablePercent = 55.0,
                    DepthPercent = 60.0,
                    Description = "A beautiful diamond",
                    GIAReportNumber = 123456,
                    IssueDate = new DateTime(2020, 6, 1),
                    Shape = Shape.Round,
                    CaratWeight = 1.5,
                    ColorGrade = ColorGrade.D,
                    ClarityGrade = ClarityGrade.VVS1,
                    CutGrade = Grade.Excellent,
                    PolishGrade = Grade.Excellent,
                    SymmetryGrade = Grade.Excellent,
                    FluoresceneGrade = Grade.Excellent,
                    Inscription = "GIA123456",
                    Height = 5.0,
                    Width = 5.0,
                    Length = 5.0,
                    Price = 10000.0,
                    Block = false,
                    UnitInStock = 5,
                    SKU = "SKU001"
                }
            );

            modelBuilder.Entity<Order>().HasData(
                new Order
                {
                    OrderID = "O001",
                    OrderStatus = OrderStatus.Pending,
                    DateOrdered = DateTime.Now,
                    DateReceived = null,
                    TotalPrice = 10500.0,
                    AccountID = "C001",
                    PayMethod = PayMethod.Cash,
                    Block = false,
                    EmployeeAssignID = "E001"
                }
            );

            modelBuilder.Entity<OrderDetail>().HasData(
                new OrderDetail
                {
                    OrderDetailID = "OD001",
                    DiamondID = "D001",
                    OrderID = "O001",
                    Quantity = 1,
                    Price = 10000.0,
                    Block = false
                },
                new OrderDetail
                {
                    OrderDetailID = "OD002",
                    AccessoryID = "A001",
                    OrderID = "O001",
                    Quantity = 1,
                    Price = 500.0,
                    Block = false
                }
            );
        }
    }
}
