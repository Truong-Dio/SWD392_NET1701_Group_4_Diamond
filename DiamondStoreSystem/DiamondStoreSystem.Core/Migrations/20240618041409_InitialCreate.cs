using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DiamondStoreSystem.Core.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accessories",
                columns: table => new
                {
                    AccessoryID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AccessoryName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Material = table.Column<int>(type: "int", nullable: false),
                    Style = table.Column<int>(type: "int", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    UnitInStock = table.Column<int>(type: "int", nullable: false)
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
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                name: "Diamonds",
                columns: table => new
                {
                    DiamondID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Origin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LabCreated = table.Column<int>(type: "int", nullable: false),
                    TablePercent = table.Column<double>(type: "float", nullable: false),
                    DepthPercent = table.Column<double>(type: "float", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                    Inscription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Height = table.Column<double>(type: "float", nullable: false),
                    Width = table.Column<double>(type: "float", nullable: false),
                    Length = table.Column<double>(type: "float", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    UnitInStock = table.Column<int>(type: "int", nullable: false),
                    SKU = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diamonds", x => x.DiamondID);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    OrderStatus = table.Column<int>(type: "int", nullable: false),
                    DateOrdered = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DateReceived = table.Column<DateTime>(type: "datetime2", nullable: true),
                    TotalPrice = table.Column<double>(type: "float", nullable: false),
                    AccountID = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    EmployeeAssignID = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    PayMethod = table.Column<int>(type: "int", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderID);
                    table.ForeignKey(
                        name: "FK_Orders_Accounts_AccountID",
                        column: x => x.AccountID,
                        principalTable: "Accounts",
                        principalColumn: "AccountID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_Accounts_EmployeeAssignID",
                        column: x => x.EmployeeAssignID,
                        principalTable: "Accounts",
                        principalColumn: "AccountID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrderDetails",
                columns: table => new
                {
                    OrderDetailID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    DiamondID = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    OrderID = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Block = table.Column<bool>(type: "bit", nullable: false),
                    AccessoryID = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderDetails", x => x.OrderDetailID);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Accessories_AccessoryID",
                        column: x => x.AccessoryID,
                        principalTable: "Accessories",
                        principalColumn: "AccessoryID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Diamonds_DiamondID",
                        column: x => x.DiamondID,
                        principalTable: "Diamonds",
                        principalColumn: "DiamondID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OrderDetails_Orders_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Orders",
                        principalColumn: "OrderID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Accessories",
                columns: new[] { "AccessoryID", "AccessoryName", "Block", "Brand", "Description", "Material", "Price", "Style", "UnitInStock" },
                values: new object[,]
                {
                    { "A001", "Gold Ring", false, "BrandA", "A beautiful gold ring", 2, 500.0, 0, 10 },
                    { "A002", "Silver Necklace", false, "BrandB", "A shiny silver necklace", 4, 200.0, 0, 15 }
                });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "AccountID", "Address", "Block", "DOB", "Email", "FirstName", "Gender", "JoinDate", "LastName", "LoyaltyPoint", "Password", "Phone", "Role", "WorkingSchedule" },
                values: new object[,]
                {
                    { "C001", "123 Main St", false, new DateTime(1990, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "customer1@example.com", "John", 1, new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Doe", 100, "password", 1234567890m, 0, 1 },
                    { "E001", "456 Elm St", false, new DateTime(1985, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "employee1@example.com", "Jane", 0, new DateTime(2019, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Smith", null, "password", 9876543210m, 1, 2 },
                    { "E002", "456 Elm St", false, new DateTime(1985, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "admin@example.com", "Jane", 0, new DateTime(2019, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Smith", null, "string", 9876543210m, 3, 2 }
                });

            migrationBuilder.InsertData(
                table: "Diamonds",
                columns: new[] { "DiamondID", "Block", "CaratWeight", "ClarityGrade", "ColorGrade", "CutGrade", "DepthPercent", "Description", "FluoresceneGrade", "GIAReportNumber", "Height", "Inscription", "IssueDate", "LabCreated", "Length", "Origin", "PolishGrade", "Price", "SKU", "Shape", "SymmetryGrade", "TablePercent", "UnitInStock", "Width" },
                values: new object[] { "D001", false, 1.5, 8, 22, 4, 60.0, "A beautiful diamond", 4, 123456, 5.0, "GIA123456", new DateTime(2020, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 5.0, "South Africa", 4, 10000.0, "SKU001", 0, 4, 55.0, 5, 5.0 });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "OrderID", "AccountID", "Block", "DateOrdered", "DateReceived", "EmployeeAssignID", "OrderStatus", "PayMethod", "TotalPrice" },
                values: new object[] { "O001", "C001", false, new DateTime(2024, 6, 18, 6, 14, 9, 244, DateTimeKind.Local).AddTicks(469), null, "E001", 1, 2, 10500.0 });

            migrationBuilder.InsertData(
                table: "OrderDetails",
                columns: new[] { "OrderDetailID", "AccessoryID", "Block", "DiamondID", "OrderID", "Price", "Quantity" },
                values: new object[] { "OD001", null, false, "D001", "O001", 10000.0, 1 });

            migrationBuilder.InsertData(
                table: "OrderDetails",
                columns: new[] { "OrderDetailID", "AccessoryID", "Block", "DiamondID", "OrderID", "Price", "Quantity" },
                values: new object[] { "OD002", "A001", false, null, "O001", 500.0, 1 });

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_AccessoryID",
                table: "OrderDetails",
                column: "AccessoryID");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_DiamondID",
                table: "OrderDetails",
                column: "DiamondID");

            migrationBuilder.CreateIndex(
                name: "IX_OrderDetails_OrderID",
                table: "OrderDetails",
                column: "OrderID");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_AccountID",
                table: "Orders",
                column: "AccountID");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_EmployeeAssignID",
                table: "Orders",
                column: "EmployeeAssignID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderDetails");

            migrationBuilder.DropTable(
                name: "Accessories");

            migrationBuilder.DropTable(
                name: "Diamonds");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
