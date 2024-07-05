﻿// <auto-generated />
using System;
using DiamondStoreSystem.DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace DiamondStoreSystem.DataLayer.Migrations
{
    [DbContext(typeof(DiamondStoreSystemDBContext))]
    [Migration("20240701084522_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Accessory", b =>
                {
                    b.Property<string>("AccessoryID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AccessoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Block")
                        .HasColumnType("bit");

                    b.Property<string>("Brand")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Material")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("SKU")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Style")
                        .HasColumnType("int");

                    b.Property<int>("UnitInStock")
                        .HasColumnType("int");

                    b.HasKey("AccessoryID");

                    b.ToTable("Accessories");

                    b.HasData(
                        new
                        {
                            AccessoryID = "A001",
                            AccessoryName = "Gold Chain",
                            Block = false,
                            Brand = "LuxuryBrand",
                            Description = "18k gold chain",
                            Material = 1,
                            Price = 500.0,
                            SKU = "GC001",
                            Style = 1,
                            UnitInStock = 10
                        });
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Account", b =>
                {
                    b.Property<string>("AccountID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Block")
                        .HasColumnType("bit");

                    b.Property<DateTime>("DOB")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Gender")
                        .HasColumnType("int");

                    b.Property<DateTime>("JoinDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("LoyaltyPoint")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Phone")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("Role")
                        .HasColumnType("int");

                    b.Property<int?>("WorkingSchedule")
                        .HasColumnType("int");

                    b.HasKey("AccountID");

                    b.ToTable("Accounts");

                    b.HasData(
                        new
                        {
                            AccountID = "S001",
                            Address = "123 Admin St.",
                            Block = false,
                            DOB = new DateTime(1980, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "admin@example.com",
                            FirstName = "Super",
                            Gender = 1,
                            JoinDate = new DateTime(2024, 7, 1, 15, 45, 21, 762, DateTimeKind.Local).AddTicks(9829),
                            LastName = "Admin",
                            LoyaltyPoint = 0,
                            Password = "473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8",
                            Phone = 1234567890m,
                            Role = 3,
                            WorkingSchedule = 1
                        },
                        new
                        {
                            AccountID = "S002",
                            Address = "123 Admin St.",
                            Block = false,
                            DOB = new DateTime(1980, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "staff1@example.com",
                            FirstName = "Super",
                            Gender = 1,
                            JoinDate = new DateTime(2024, 7, 1, 15, 45, 21, 762, DateTimeKind.Local).AddTicks(9869),
                            LastName = "Admin",
                            LoyaltyPoint = 0,
                            Password = "473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8",
                            Phone = 1234567890m,
                            Role = 1,
                            WorkingSchedule = 1
                        },
                        new
                        {
                            AccountID = "C001",
                            Address = "456 Customer Ave.",
                            Block = false,
                            DOB = new DateTime(1990, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "customer@example.com",
                            FirstName = "Regular",
                            Gender = 0,
                            JoinDate = new DateTime(2024, 7, 1, 15, 45, 21, 762, DateTimeKind.Local).AddTicks(9888),
                            LastName = "Customer",
                            LoyaltyPoint = 100,
                            Password = "473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8",
                            Phone = 9876543210m,
                            Role = 0,
                            WorkingSchedule = 0
                        });
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Diamond", b =>
                {
                    b.Property<string>("DiamondID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Block")
                        .HasColumnType("bit");

                    b.Property<double>("CaratWeight")
                        .HasColumnType("float");

                    b.Property<int>("ClarityGrade")
                        .HasColumnType("int");

                    b.Property<int>("ColorGrade")
                        .HasColumnType("int");

                    b.Property<int>("CutGrade")
                        .HasColumnType("int");

                    b.Property<double>("DepthPercent")
                        .HasColumnType("float");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FluoresceneGrade")
                        .HasColumnType("int");

                    b.Property<int>("GIAReportNumber")
                        .HasColumnType("int");

                    b.Property<double>("Height")
                        .HasColumnType("float");

                    b.Property<string>("Inscription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("IssueDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("LabCreated")
                        .HasColumnType("int");

                    b.Property<double>("Length")
                        .HasColumnType("float");

                    b.Property<string>("Origin")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PolishGrade")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("SKU")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Shape")
                        .HasColumnType("int");

                    b.Property<int>("SymmetryGrade")
                        .HasColumnType("int");

                    b.Property<double>("TablePercent")
                        .HasColumnType("float");

                    b.Property<double>("Width")
                        .HasColumnType("float");

                    b.HasKey("DiamondID");

                    b.ToTable("Diamond");

                    b.HasData(
                        new
                        {
                            DiamondID = "D001",
                            Block = false,
                            CaratWeight = 1.0,
                            ClarityGrade = 1,
                            ColorGrade = 1,
                            CutGrade = 1,
                            DepthPercent = 62.0,
                            Description = "Brilliant cut diamond",
                            FluoresceneGrade = 1,
                            GIAReportNumber = 123456,
                            Height = 4.0,
                            Inscription = "GIA12345446",
                            IssueDate = new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            LabCreated = 0,
                            Length = 6.0,
                            Origin = "Africa",
                            PolishGrade = 1,
                            Price = 500.0,
                            SKU = "DIA001",
                            Shape = 1,
                            SymmetryGrade = 1,
                            TablePercent = 57.5,
                            Width = 6.0
                        },
                        new
                        {
                            DiamondID = "D002",
                            Block = false,
                            CaratWeight = 1.0,
                            ClarityGrade = 1,
                            ColorGrade = 1,
                            CutGrade = 1,
                            DepthPercent = 62.0,
                            Description = "Brilliant cut diamond",
                            FluoresceneGrade = 1,
                            GIAReportNumber = 123456,
                            Height = 4.0,
                            Inscription = "GIA12345446",
                            IssueDate = new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            LabCreated = 0,
                            Length = 6.0,
                            Origin = "Africa",
                            PolishGrade = 1,
                            Price = 500.0,
                            SKU = "DIA001",
                            Shape = 1,
                            SymmetryGrade = 1,
                            TablePercent = 57.5,
                            Width = 6.0
                        });
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Order", b =>
                {
                    b.Property<string>("OrderID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Block")
                        .HasColumnType("bit");

                    b.Property<string>("CustomerID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DateOrdered")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DateReceived")
                        .HasColumnType("datetime2");

                    b.Property<string>("EmployeeAssignID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("OrderStatus")
                        .HasColumnType("int");

                    b.Property<int>("PayMethod")
                        .HasColumnType("int");

                    b.Property<double>("TotalPrice")
                        .HasColumnType("float");

                    b.HasKey("OrderID");

                    b.HasIndex("CustomerID");

                    b.HasIndex("EmployeeAssignID");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Product", b =>
                {
                    b.Property<string>("ProductID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AccessoryID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Block")
                        .HasColumnType("bit");

                    b.Property<string>("MainDiamondID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("OrderID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.HasKey("ProductID");

                    b.HasIndex("AccessoryID")
                        .IsUnique()
                        .HasFilter("[AccessoryID] IS NOT NULL");

                    b.HasIndex("MainDiamondID")
                        .IsUnique();

                    b.HasIndex("OrderID");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.SubDiamond", b =>
                {
                    b.Property<string>("SubDiamondID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProductID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("SubDiamondID");

                    b.HasIndex("ProductID");

                    b.ToTable("SubDiamonds");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.VnPaymentResponse", b =>
                {
                    b.Property<string>("VnpOrderId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("OrderDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OrderId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("PaymentMethod")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Success")
                        .HasColumnType("bit");

                    b.Property<string>("Token")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TransactionId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VnPayResponseCode")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("VnpOrderId");

                    b.HasIndex("OrderId")
                        .IsUnique()
                        .HasFilter("[OrderId] IS NOT NULL");

                    b.ToTable("VnPaymentResponses");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Warranty", b =>
                {
                    b.Property<string>("WarrantyID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Block")
                        .HasColumnType("bit");

                    b.Property<DateTime>("ExpiredDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("IssueDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ProductID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("WarrantyID");

                    b.HasIndex("ProductID")
                        .IsUnique();

                    b.ToTable("Warranties");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Order", b =>
                {
                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Account", "Customer")
                        .WithMany("OrdersCustomer")
                        .HasForeignKey("CustomerID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Account", "EmployeeAccount")
                        .WithMany("OrdersStaff")
                        .HasForeignKey("EmployeeAssignID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Customer");

                    b.Navigation("EmployeeAccount");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Product", b =>
                {
                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Accessory", "Accessory")
                        .WithOne()
                        .HasForeignKey("DiamondStoreSystem.DataLayer.Models.Product", "AccessoryID")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Diamond", "MainDiamond")
                        .WithOne()
                        .HasForeignKey("DiamondStoreSystem.DataLayer.Models.Product", "MainDiamondID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Order", "Order")
                        .WithMany("Products")
                        .HasForeignKey("OrderID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Accessory");

                    b.Navigation("MainDiamond");

                    b.Navigation("Order");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.SubDiamond", b =>
                {
                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Product", "Product")
                        .WithMany("SubDiamonds")
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Diamond", "Diamond")
                        .WithOne()
                        .HasForeignKey("DiamondStoreSystem.DataLayer.Models.SubDiamond", "SubDiamondID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Diamond");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.VnPaymentResponse", b =>
                {
                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Order", "Order")
                        .WithOne("VnPaymentResponse")
                        .HasForeignKey("DiamondStoreSystem.DataLayer.Models.VnPaymentResponse", "OrderId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.Navigation("Order");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Warranty", b =>
                {
                    b.HasOne("DiamondStoreSystem.DataLayer.Models.Product", "Product")
                        .WithOne("Warranty")
                        .HasForeignKey("DiamondStoreSystem.DataLayer.Models.Warranty", "ProductID")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Product");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Account", b =>
                {
                    b.Navigation("OrdersCustomer");

                    b.Navigation("OrdersStaff");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Order", b =>
                {
                    b.Navigation("Products");

                    b.Navigation("VnPaymentResponse");
                });

            modelBuilder.Entity("DiamondStoreSystem.DataLayer.Models.Product", b =>
                {
                    b.Navigation("SubDiamonds");

                    b.Navigation("Warranty");
                });
#pragma warning restore 612, 618
        }
    }
}
