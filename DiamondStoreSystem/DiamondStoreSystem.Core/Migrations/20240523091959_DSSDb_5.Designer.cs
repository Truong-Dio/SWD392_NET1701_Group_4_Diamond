﻿// <auto-generated />
using System;
using DiamondStoreSystem.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DiamondStoreSystem.Core.Migrations
{
    [DbContext(typeof(DiamondStoreSystemDbContext))]
    [Migration("20240523091959_DSSDb_5")]
    partial class DSSDb_5
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.Account", b =>
                {
                    b.Property<string>("AccountID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AccountID");

                    b.ToTable("Accounts");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.Customer", b =>
                {
                    b.Property<string>("UserUID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AccountID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasMaxLength(160)
                        .HasColumnType("nvarchar(160)");

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("JoinDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("LoyaltyPoint")
                        .HasColumnType("int");

                    b.Property<int>("Phone")
                        .HasColumnType("int");

                    b.HasKey("UserUID");

                    b.HasIndex("AccountID");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.Employee", b =>
                {
                    b.Property<string>("EmpID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AccountID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmpAddress")
                        .IsRequired()
                        .HasMaxLength(160)
                        .HasColumnType("nvarchar(160)");

                    b.Property<string>("EmpGender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("EmpJoinDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmpName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EmpPhone")
                        .HasColumnType("int");

                    b.HasKey("EmpID");

                    b.HasIndex("AccountID");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.PurchaseOrder", b =>
                {
                    b.Property<string>("POID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CustomerUserUID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DateOrdered")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DateReceived")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmpID")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmployeeEmpID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("OrderStatus")
                        .HasColumnType("int");

                    b.Property<int>("OrderTotal")
                        .HasColumnType("int");

                    b.Property<string>("UserUID")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("POID");

                    b.HasIndex("CustomerUserUID");

                    b.HasIndex("EmployeeEmpID");

                    b.ToTable("PurchaseOrders");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.Customer", b =>
                {
                    b.HasOne("DiamondStoreSystem.Core.Models.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccountID");

                    b.Navigation("Account");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.Employee", b =>
                {
                    b.HasOne("DiamondStoreSystem.Core.Models.Account", "Account")
                        .WithMany()
                        .HasForeignKey("AccountID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Account");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.PurchaseOrder", b =>
                {
                    b.HasOne("DiamondStoreSystem.Core.Models.Customer", "Customer")
                        .WithMany("PurchaseOrders")
                        .HasForeignKey("CustomerUserUID");

                    b.HasOne("DiamondStoreSystem.Core.Models.Employee", "Employee")
                        .WithMany("PurchaseOrders")
                        .HasForeignKey("EmployeeEmpID");

                    b.Navigation("Customer");

                    b.Navigation("Employee");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.Customer", b =>
                {
                    b.Navigation("PurchaseOrders");
                });

            modelBuilder.Entity("DiamondStoreSystem.Core.Models.Employee", b =>
                {
                    b.Navigation("PurchaseOrders");
                });
#pragma warning restore 612, 618
        }
    }
}
