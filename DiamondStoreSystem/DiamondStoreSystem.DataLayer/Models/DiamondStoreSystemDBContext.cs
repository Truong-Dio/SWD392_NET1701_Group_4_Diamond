using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Security.Cryptography;
using System.Text;

namespace DiamondStoreSystem.DataLayer.Models
{
    public class DiamondStoreSystemDBContext : DbContext
    {
        public static string HashPassword(string password)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(password));

                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }
        public DbSet<Accessory> Accessories { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Diamond> Diamonds { get; set; }
        public DbSet<Diamond> Orders { get; set; }
        public DbSet<SubDiamond> SubDiamonds { get; set; }
        public DbSet<Warranty> Warranties { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<VnPaymentResponse> VnPaymentResponses { get; set; }

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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Set up relationships
            modelBuilder.Entity<Order>()
                .HasOne(o => o.Customer)
                .WithMany(a => a.Orders)
                .HasForeignKey(o => o.CustomerID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Order>()
                .HasOne(o => o.EmployeeAccount)
                .WithMany()
                .HasForeignKey(o => o.EmployeeAssignID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Order)
                .WithMany(o => o.Products)
                .HasForeignKey(p => p.OrderID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.MainDiamond)
                .WithMany()
                .HasForeignKey(p => p.MainDiamondID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Accessory)
                .WithMany()
                .HasForeignKey(p => p.AccessoryID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SubDiamond>()
        .HasOne(sd => sd.Order)
        .WithMany()
        .HasForeignKey(sd => sd.OrderID)
        .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SubDiamond>()
                .HasOne(sd => sd.Diamond)
                .WithOne()
                .HasForeignKey<SubDiamond>(sd => sd.SubDiamondID)
                .OnDelete(DeleteBehavior.Restrict);

            // Seed data for Account
            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    AccountID = "C1",
                    Email = "customer@example.com",
                    Password = HashPassword("password"),
                    LastName = "Doe",
                    FirstName = "John",
                    Phone = 123456789,
                    Address = "123 Main St",
                    Gender = 1,
                    DOB = new DateTime(1990, 1, 1),
                    JoinDate = DateTime.Now,
                    LoyaltyPoint = 100,
                    Block = false,
                    Role = 0,
                    WorkingSchedule = 0
                },
                new Account
                {
                    AccountID = "S2",
                    Email = "staff@example.com",
                    Password = HashPassword("password"),
                    LastName = "Smith",
                    FirstName = "Jane",
                    Phone = 987654321,
                    Address = "456 Elm St",
                    Gender = 2,
                    DOB = new DateTime(1985, 5, 15),
                    JoinDate = DateTime.Now,
                    LoyaltyPoint = 0,
                    Block = false,
                    Role = 1,
                    WorkingSchedule = 0
                },
                new Account
                {
                    AccountID = "S1",
                    Email = "admin@example.com",
                    Password = HashPassword("password"),
                    LastName = "Smith",
                    FirstName = "Jane",
                    Phone = 987654321,
                    Address = "456 Elm St",
                    Gender = 2,
                    DOB = new DateTime(1985, 5, 15),
                    JoinDate = DateTime.Now,
                    LoyaltyPoint = 0,
                    Block = false,
                    Role = 4,
                    WorkingSchedule = 0
                }
            );

            // Seed data for Order
            modelBuilder.Entity<Order>().HasData(
                new Order
                {
                    OrderID = "O1",
                    OrderStatus = 1,
                    DateOrdered = DateTime.Now,
                    DateReceived = null,
                    TotalPrice = 5000,
                    CustomerID = "C1",
                    EmployeeAssignID = "S2",
                    PayMethod = 1,
                    Block = false,
                    VnpOrderId = null
                }
            );

            // Seed data for Diamond
            modelBuilder.Entity<Diamond>().HasData(
                new Diamond
                {
                    DiamondID = "D1",
                    Origin = "Africa",
                    LabCreated = 0,
                    TablePercent = 55.0,
                    DepthPercent = 62.5,
                    Description = "High quality diamond",
                    GIAReportNumber = 12345,
                    IssueDate = new DateTime(2020, 1, 1),
                    Shape = 1,
                    CaratWeight = 1.0,
                    ColorGrade = 1,
                    ClarityGrade = 1,
                    CutGrade = 1,
                    PolishGrade = 1,
                    SymmetryGrade = 1,
                    FluoresceneGrade = 0,
                    Inscription = "GIA12345",
                    Height = 5.0,
                    Width = 5.0,
                    Length = 5.0,
                    Price = 3000,
                    Block = false,
                    SKU = "DIA001"
                }
            );

            // Seed data for Accessory
            modelBuilder.Entity<Accessory>().HasData(
                new Accessory
                {
                    AccessoryID = "A1",
                    AccessoryName = "Gold Chain",
                    Description = "24k Gold Chain",
                    Material = 1,
                    Style = 1,
                    Brand = "Luxury",
                    Block = false,
                    Price = 2000,
                    UnitInStock = 10,
                    SKU = "ACC001"
                }
            );

            // Seed data for Product
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    ProductID = "P1",
                    Price = 5000,
                    Block = false,
                    AccessoryID = "A1",
                    OrderID = "O1",
                    MainDiamondID = "D1"
                }
            );

            // Seed data for SubDiamond
            modelBuilder.Entity<SubDiamond>().HasData(
                new SubDiamond
                {
                    SubDiamondID = "D1",
                    OrderID = "O1"
                }
            );

            // Seed data for Warranty
            modelBuilder.Entity<Warranty>().HasData(
                new Warranty
                {
                    WarrantyID = "W1",
                    IssueDate = DateTime.Now,
                    ExpiredDate = DateTime.Now.AddYears(1),
                    Block = false,
                    ProductID = "P1"
                }
            );
        }
    }
}
