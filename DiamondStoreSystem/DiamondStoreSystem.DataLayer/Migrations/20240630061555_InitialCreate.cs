using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DiamondStoreSystem.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accessories",
                columns: table => new
                {
                    AccessoryID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AccessoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Material = table.Column<int>(type: "int", nullable: false),
                    Style = table.Column<int>(type: "int", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    UnitInStock = table.Column<int>(type: "int", nullable: false),
                    SKU = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accessories", x => x.AccessoryID);
                });

            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    AccountID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    JoinDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LoyaltyPoint = table.Column<int>(type: "int", nullable: true),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    Role = table.Column<int>(type: "int", nullable: false),
                    WorkingSchedule = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.AccountID);
                });

            migrationBuilder.CreateTable(
                name: "Diamond",
                columns: table => new
                {
                    DiamondID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Origin = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LabCreated = table.Column<int>(type: "int", nullable: false),
                    TablePercent = table.Column<double>(type: "float", nullable: false),
                    DepthPercent = table.Column<double>(type: "float", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GIAReportNumber = table.Column<int>(type: "int", nullable: false),
                    IssueDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Shape = table.Column<int>(type: "int", nullable: false),
                    CaratWeight = table.Column<double>(type: "float", nullable: false),
                    ColorGrade = table.Column<int>(type: "int", nullable: false),
                    ClarityGrade = table.Column<int>(type: "int", nullable: false),
                    CutGrade = table.Column<int>(type: "int", nullable: false),
                    PolishGrade = table.Column<int>(type: "int", nullable: false),
                    SymmetryGrade = table.Column<int>(type: "int", nullable: false),
                    FluoresceneGrade = table.Column<int>(type: "int", nullable: false),
                    Inscription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Height = table.Column<double>(type: "float", nullable: false),
                    Width = table.Column<double>(type: "float", nullable: false),
                    Length = table.Column<double>(type: "float", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    SKU = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diamond", x => x.DiamondID);
                });

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    OrderID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    OrderStatus = table.Column<int>(type: "int", nullable: false),
                    DateOrdered = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateReceived = table.Column<DateTime>(type: "datetime2", nullable: true),
                    TotalPrice = table.Column<double>(type: "float", nullable: false),
                    CustomerID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    EmployeeAssignID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PayMethod = table.Column<int>(type: "int", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    VnpOrderId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.OrderID);
                    table.ForeignKey(
                        name: "FK_Order_Accounts_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Accounts",
                        principalColumn: "AccountID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Order_Accounts_EmployeeAssignID",
                        column: x => x.EmployeeAssignID,
                        principalTable: "Accounts",
                        principalColumn: "AccountID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    AccessoryID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    OrderID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    MainDiamondID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                    table.ForeignKey(
                        name: "FK_Products_Accessories_AccessoryID",
                        column: x => x.AccessoryID,
                        principalTable: "Accessories",
                        principalColumn: "AccessoryID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Products_Diamond_MainDiamondID",
                        column: x => x.MainDiamondID,
                        principalTable: "Diamond",
                        principalColumn: "DiamondID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Products_Order_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Order",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "VnPaymentResponses",
                columns: table => new
                {
                    VnpOrderId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Success = table.Column<bool>(type: "bit", nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OrderDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TransactionId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Token = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VnPayResponseCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    OrderId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VnPaymentResponses", x => x.VnpOrderId);
                    table.ForeignKey(
                        name: "FK_VnPaymentResponses_Order_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Order",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SubDiamonds",
                columns: table => new
                {
                    SubDiamondID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    OrderID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProductID = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubDiamonds", x => x.SubDiamondID);
                    table.ForeignKey(
                        name: "FK_SubDiamonds_Diamond_SubDiamondID",
                        column: x => x.SubDiamondID,
                        principalTable: "Diamond",
                        principalColumn: "DiamondID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SubDiamonds_Order_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Order",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SubDiamonds_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID");
                });

            migrationBuilder.CreateTable(
                name: "Warranties",
                columns: table => new
                {
                    WarrantyID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    IssueDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExpiredDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    ProductID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Warranties", x => x.WarrantyID);
                    table.ForeignKey(
                        name: "FK_Warranties_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Accessories",
                columns: new[] { "AccessoryID", "AccessoryName", "Block", "Brand", "Description", "Material", "Price", "SKU", "Style", "UnitInStock" },
                values: new object[] { "A1", "Gold Chain", false, "Luxury", "24k Gold Chain", 1, 2000.0, "ACC001", 1, 10 });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "AccountID", "Address", "Block", "DOB", "Email", "FirstName", "Gender", "JoinDate", "LastName", "LoyaltyPoint", "Password", "Phone", "Role", "WorkingSchedule" },
                values: new object[,]
                {
                    { "C1", "123 Main St", false, new DateTime(1990, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "customer@example.com", "John", 1, new DateTime(2024, 6, 30, 13, 15, 55, 131, DateTimeKind.Local).AddTicks(5967), "Doe", 100, "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", 123456789m, 0, 0 },
                    { "S1", "456 Elm St", false, new DateTime(1985, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "admin@example.com", "Jane", 2, new DateTime(2024, 6, 30, 13, 15, 55, 131, DateTimeKind.Local).AddTicks(6025), "Smith", 0, "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", 987654321m, 4, 0 },
                    { "S2", "456 Elm St", false, new DateTime(1985, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "staff@example.com", "Jane", 2, new DateTime(2024, 6, 30, 13, 15, 55, 131, DateTimeKind.Local).AddTicks(6006), "Smith", 0, "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", 987654321m, 1, 0 }
                });

            migrationBuilder.InsertData(
                table: "Diamond",
                columns: new[] { "DiamondID", "Block", "CaratWeight", "ClarityGrade", "ColorGrade", "CutGrade", "DepthPercent", "Description", "FluoresceneGrade", "GIAReportNumber", "Height", "Inscription", "IssueDate", "LabCreated", "Length", "Origin", "PolishGrade", "Price", "SKU", "Shape", "SymmetryGrade", "TablePercent", "Width" },
                values: new object[] { "D1", false, 1.0, 1, 1, 1, 62.5, "High quality diamond", 0, 12345, 5.0, "GIA12345", new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 5.0, "Africa", 1, 3000.0, "DIA001", 1, 1, 55.0, 5.0 });

            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "OrderID", "Block", "CustomerID", "DateOrdered", "DateReceived", "EmployeeAssignID", "OrderStatus", "PayMethod", "TotalPrice", "VnpOrderId" },
                values: new object[] { "O1", false, "C1", new DateTime(2024, 6, 30, 13, 15, 55, 131, DateTimeKind.Local).AddTicks(6187), null, "S2", 1, 1, 5000.0, null });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductID", "AccessoryID", "Block", "MainDiamondID", "OrderID", "Price" },
                values: new object[] { "P1", "A1", false, "D1", "O1", 5000.0 });

            migrationBuilder.InsertData(
                table: "SubDiamonds",
                columns: new[] { "SubDiamondID", "OrderID", "ProductID" },
                values: new object[] { "D1", "O1", null });

            migrationBuilder.InsertData(
                table: "Warranties",
                columns: new[] { "WarrantyID", "Block", "ExpiredDate", "IssueDate", "ProductID" },
                values: new object[] { "W1", false, new DateTime(2025, 6, 30, 13, 15, 55, 131, DateTimeKind.Local).AddTicks(6289), new DateTime(2024, 6, 30, 13, 15, 55, 131, DateTimeKind.Local).AddTicks(6288), "P1" });

            migrationBuilder.CreateIndex(
                name: "IX_Order_CustomerID",
                table: "Order",
                column: "CustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_Order_EmployeeAssignID",
                table: "Order",
                column: "EmployeeAssignID");

            migrationBuilder.CreateIndex(
                name: "IX_Products_AccessoryID",
                table: "Products",
                column: "AccessoryID");

            migrationBuilder.CreateIndex(
                name: "IX_Products_MainDiamondID",
                table: "Products",
                column: "MainDiamondID");

            migrationBuilder.CreateIndex(
                name: "IX_Products_OrderID",
                table: "Products",
                column: "OrderID");

            migrationBuilder.CreateIndex(
                name: "IX_SubDiamonds_OrderID",
                table: "SubDiamonds",
                column: "OrderID");

            migrationBuilder.CreateIndex(
                name: "IX_SubDiamonds_ProductID",
                table: "SubDiamonds",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_VnPaymentResponses_OrderId",
                table: "VnPaymentResponses",
                column: "OrderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Warranties_ProductID",
                table: "Warranties",
                column: "ProductID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SubDiamonds");

            migrationBuilder.DropTable(
                name: "VnPaymentResponses");

            migrationBuilder.DropTable(
                name: "Warranties");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Accessories");

            migrationBuilder.DropTable(
                name: "Diamond");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
