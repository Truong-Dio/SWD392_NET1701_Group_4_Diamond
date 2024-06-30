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
                optionsBuilder.UseSqlServer("Server=tcp:dssdb111.database.windows.net,1433;Initial Catalog=DiamondStoreSystemDB;Persist Security Info=False;User ID=SWD391Admin;Password=DSSSWD391.;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Set up relationships
            modelBuilder.Entity<Order>()
                .HasOne(o => o.Customer)
                .WithMany(a => a.OrdersCustomer)
                .HasForeignKey(o => o.CustomerID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Order>()
                .HasOne(o => o.EmployeeAccount)
                .WithMany(a => a.OrdersStaff)
                .HasForeignKey(o => o.EmployeeAssignID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Order)
                .WithMany(o => o.Products)
                .HasForeignKey(p => p.OrderID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.MainDiamond)
                .WithOne()
                .HasForeignKey<Product>(p => p.MainDiamondID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Accessory)
                .WithOne()
                .HasForeignKey<Product>(p => p.AccessoryID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SubDiamond>()
                .HasOne(sd => sd.Product)
                .WithMany(p => p.SubDiamonds)
                .HasForeignKey(sd => sd.ProductID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<SubDiamond>()
                .HasOne(sd => sd.Diamond)
                .WithOne()
                .HasForeignKey<SubDiamond>(sd => sd.SubDiamondID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<VnPaymentResponse>()
                .HasOne(p => p.Order)
                .WithOne()
                .HasForeignKey<Order>(o => o.OrderID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Warranty>()
                .HasOne(p => p.Product)
                .WithOne()
                .HasForeignKey<Product>(p => p.ProductID)
                .OnDelete(DeleteBehavior.Restrict);

            // Seeding Accounts
            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    AccountID = "C1",
                    Email = "john.doe@example.com",
                    Password = HashPassword("hashedpassword"),
                    LastName = "Doe",
                    FirstName = "John",
                    Phone = 1234567890,
                    Address = "123 Main St",
                    Gender = 1,
                    DOB = new DateTime(1980, 1, 1),
                    JoinDate = new DateTime(2023, 1, 1),
                    LoyaltyPoint = 100,
                    Block = false,
                    Role = 0,
                    WorkingSchedule = 1
                }
            );

            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    AccountID = "E1",
                    Email = "admin@example.com",
                    Password = HashPassword("string"),
                    LastName = "Doe",
                    FirstName = "John",
                    Phone = 1234567890,
                    Address = "123 Main St",
                    Gender = 1,
                    DOB = new DateTime(1980, 1, 1),
                    JoinDate = new DateTime(2023, 1, 1),
                    LoyaltyPoint = 100,
                    Block = false,
                    Role = 3,
                    WorkingSchedule = 1
                }
            );

            modelBuilder.Entity<Account>().HasData(
                new Account
                {
                    AccountID = "E2",
                    Email = "johnny.dang@example.com",
                    Password = HashPassword("string"),
                    LastName = "Doe",
                    FirstName = "John",
                    Phone = 1234567890,
                    Address = "123 Main St",
                    Gender = 1,
                    DOB = new DateTime(1980, 1, 1),
                    JoinDate = new DateTime(2023, 1, 1),
                    LoyaltyPoint = 100,
                    Block = false,
                    Role = 1,
                    WorkingSchedule = 1
                }
            );

            // Seeding Diamonds
            modelBuilder.Entity<Diamond>().HasData(
                new Diamond
                {
                    DiamondID = "D1",
                    Origin = "South Africa",
                    LabCreated = 0,
                    TablePercent = 57.5,
                    DepthPercent = 62.3,
                    Description = "A beautiful diamond",
                    GIAReportNumber = 123456,
                    IssueDate = new DateTime(2023, 1, 1),
                    Shape = 1,
                    CaratWeight = 1.2,
                    ColorGrade = 1,
                    ClarityGrade = 1,
                    CutGrade = 1,
                    PolishGrade = 1,
                    SymmetryGrade = 1,
                    FluoresceneGrade = 0,
                    Inscription = "GIA123456",
                    Height = 3.5,
                    Width = 4.0,
                    Length = 4.0,
                    Price = 5000.00,
                    Block = false,
                    SKU = "D123"
                },
                new Diamond
                {
                    DiamondID = "D2",
                    Origin = "Botswana",
                    LabCreated = 1,
                    TablePercent = 56.0,
                    DepthPercent = 61.8,
                    Description = "Another beautiful diamond",
                    GIAReportNumber = 789012,
                    IssueDate = new DateTime(2023, 2, 1),
                    Shape = 1,
                    CaratWeight = 1.5,
                    ColorGrade = 2,
                    ClarityGrade = 2,
                    CutGrade = 2,
                    PolishGrade = 2,
                    SymmetryGrade = 2,
                    FluoresceneGrade = 1,
                    Inscription = "GIA789012",
                    Height = 3.8,
                    Width = 4.5,
                    Length = 4.5,
                    Price = 6000.00,
                    Block = false,
                    SKU = "D456"
                }
            );

            // Seeding Accessories
            modelBuilder.Entity<Accessory>().HasData(
                new Accessory
                {
                    AccessoryID = "A1",
                    AccessoryName = "Gold Ring",
                    Description = "18K gold ring",
                    Material = 1,
                    Style = 1,
                    Brand = "GoldBrand",
                    Block = false,
                    Price = 200.00,
                    UnitInStock = 10,
                    SKU = "R123"
                }
            );

            //// Seeding Orders
            //modelBuilder.Entity<Order>().HasData(
            //    new Order
            //    {
            //        OrderID = "O1",
            //        DateOrdered = new DateTime(2023, 3, 1),
            //        DateReceived = null,
            //        OrderStatus = 1,
            //        PayMethod = 1,
            //        TotalPrice = 1000.00,
            //        CustomerID = "C1",
            //        EmployeeAssignID = "E2",
            //        Block = false
            //    }
            //);

            //// Seeding Products
            //modelBuilder.Entity<Product>().HasData(
            //    new Product
            //    {
            //        ProductID = "P1",
            //        Price = 5200.00,
            //        Block = false,
            //        AccessoryID = "A1",
            //        OrderID = "O1",
            //        MainDiamondID = "D1"
            //    }
            //);

            //// Seeding SubDiamonds
            //modelBuilder.Entity<SubDiamond>().HasData(
            //    new SubDiamond
            //    {
            //        SubDiamondID = "D2",
            //        ProductID = "P1"
            //    }
            //);

            //// Seeding Warranties
            //modelBuilder.Entity<Warranty>().HasData(
            //    new Warranty
            //    {
            //        WarrantyID = "W1",
            //        IssueDate = new DateTime(2023, 3, 1),
            //        ExpiredDate = new DateTime(2024, 3, 1),
            //        Block = false,
            //        ProductID = "P1"
            //    }
            //);
        }
    }
}
