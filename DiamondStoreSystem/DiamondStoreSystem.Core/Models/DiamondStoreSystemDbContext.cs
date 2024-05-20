using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.Models
{
    public class DiamondStoreSystemDbContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }

        public const string ConnectionString = @"server =(local); database=DiamondStoreSystemDb;uid=sa;pwd=1234567890; TrustServerCertificate=True";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
            optionsBuilder.UseLoggerFactory(GetLoggerFactory());
        }

        private ILoggerFactory GetLoggerFactory()
        {
            IServiceCollection services = new ServiceCollection();
            services.AddLogging(builder =>
            {
                builder.AddConsole()
                        .AddFilter(DbLoggerCategory.Database.Command.Name,
                                                    LogLevel.Information);
            });
            return services.BuildServiceProvider().GetService<ILoggerFactory>();
        }
    }
}
