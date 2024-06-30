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
        }
    }
}
