using DiamondStoreSystem.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Infrastructure.FluentAPIs
{
    //public class EmployeeConfiguration : IEntityTypeConfiguration<Employee>
    //{
    //    public void Configure(EntityTypeBuilder<Employee> builder)
    //    {
    //        builder.ToTable("Employees"); // Set the table name

    //        builder.HasKey(e => e.EmpID); // Set the primary key

    //        // Configure other properties
    //        builder.Property(e => e.EmpID).IsRequired();
    //        builder.Property(e => e.EmpName).IsRequired().HasMaxLength(100);
    //        builder.Property(e => e.EmpAddress).IsRequired().HasMaxLength(200);
    //        builder.Property(e => e.EmpGender).IsRequired().HasMaxLength(10);
    //        builder.Property(e => e.EmpPhone).IsRequired();
    //        builder.Property(e => e.EmpJoinDate).IsRequired().HasDefaultValueSql("getutcdate()");
    //        builder.Property(e => e.AccountId).IsRequired();

    //        // Configure relationships
    //        builder.HasOne(e => e.Account)
    //             .WithOne(a => a.Employee)
    //             .HasForeignKey<Employee>(e => e.AccountId)
    //             .IsRequired();

    //        // Configure navigation property
    //        builder.HasMany(e => e.PurchaseOrders)
    //            .WithOne(po => po.Employee)
    //            .HasForeignKey(po => po.userUID);
    //    }
    //}
}
