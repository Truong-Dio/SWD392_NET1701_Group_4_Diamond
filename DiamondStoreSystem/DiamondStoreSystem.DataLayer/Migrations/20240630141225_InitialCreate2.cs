using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DiamondStoreSystem.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "SubDiamonds",
                keyColumn: "SubDiamondID",
                keyValue: "D2");

            migrationBuilder.DeleteData(
                table: "Warranties",
                keyColumn: "WarrantyID",
                keyValue: "W1");

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductID",
                keyValue: "P1");

            migrationBuilder.DeleteData(
                table: "Order",
                keyColumn: "OrderID",
                keyValue: "O1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "OrderID", "Block", "CustomerID", "DateOrdered", "DateReceived", "EmployeeAssignID", "OrderStatus", "PayMethod", "TotalPrice" },
                values: new object[] { "O1", false, "C1", new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "E2", 1, 1, 1000.0 });

            migrationBuilder.InsertData(
                table: "Warranties",
                columns: new[] { "WarrantyID", "Block", "ExpiredDate", "IssueDate", "ProductID" },
                values: new object[] { "W1", false, new DateTime(2024, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "P1" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductID", "AccessoryID", "Block", "MainDiamondID", "OrderID", "Price" },
                values: new object[] { "P1", "A1", false, "D1", "O1", 5200.0 });

            migrationBuilder.InsertData(
                table: "SubDiamonds",
                columns: new[] { "SubDiamondID", "ProductID" },
                values: new object[] { "D2", "P1" });
        }
    }
}
