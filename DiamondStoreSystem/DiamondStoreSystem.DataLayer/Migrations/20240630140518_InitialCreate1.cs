using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DiamondStoreSystem.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Accessories",
                columns: new[] { "AccessoryID", "AccessoryName", "Block", "Brand", "Description", "Material", "Price", "SKU", "Style", "UnitInStock" },
                values: new object[] { "A1", "Gold Ring", false, "GoldBrand", "18K gold ring", 1, 200.0, "R123", 1, 10 });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "AccountID", "Address", "Block", "DOB", "Email", "FirstName", "Gender", "JoinDate", "LastName", "LoyaltyPoint", "Password", "Phone", "Role", "WorkingSchedule" },
                values: new object[,]
                {
                    { "C1", "123 Main St", false, new DateTime(1980, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "john.doe@example.com", "John", 1, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Doe", 100, "741f67765bef6f01f37bf5cb1724509a83409324efa6ad2586d27f4e3edea296", 1234567890m, 0, 1 },
                    { "E1", "123 Main St", false, new DateTime(1980, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "admin@example.com", "John", 1, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Doe", 100, "473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8", 1234567890m, 3, 1 },
                    { "E2", "123 Main St", false, new DateTime(1980, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "johnny.dang@example.com", "John", 1, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Doe", 100, "473287f8298dba7163a897908958f7c0eae733e25d2e027992ea2edc9bed2fa8", 1234567890m, 1, 1 }
                });

            migrationBuilder.InsertData(
                table: "Diamond",
                columns: new[] { "DiamondID", "Block", "CaratWeight", "ClarityGrade", "ColorGrade", "CutGrade", "DepthPercent", "Description", "FluoresceneGrade", "GIAReportNumber", "Height", "Inscription", "IssueDate", "LabCreated", "Length", "Origin", "PolishGrade", "Price", "SKU", "Shape", "SymmetryGrade", "TablePercent", "Width" },
                values: new object[,]
                {
                    { "D1", false, 1.2, 1, 1, 1, 62.299999999999997, "A beautiful diamond", 0, 123456, 3.5, "GIA123456", new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 0, 4.0, "South Africa", 1, 5000.0, "D123", 1, 1, 57.5, 4.0 },
                    { "D2", false, 1.5, 2, 2, 2, 61.799999999999997, "Another beautiful diamond", 1, 789012, 3.7999999999999998, "GIA789012", new DateTime(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 4.5, "Botswana", 2, 6000.0, "D456", 1, 2, 56.0, 4.5 }
                });

            migrationBuilder.InsertData(
                table: "Warranties",
                columns: new[] { "WarrantyID", "Block", "ExpiredDate", "IssueDate", "ProductID" },
                values: new object[] { "W1", false, new DateTime(2024, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "P1" });

            migrationBuilder.InsertData(
                table: "Order",
                columns: new[] { "OrderID", "Block", "CustomerID", "DateOrdered", "DateReceived", "EmployeeAssignID", "OrderStatus", "PayMethod", "TotalPrice" },
                values: new object[] { "O1", false, "C1", new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "E2", 1, 1, 1000.0 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductID", "AccessoryID", "Block", "MainDiamondID", "OrderID", "Price" },
                values: new object[] { "P1", "A1", false, "D1", "O1", 5200.0 });

            migrationBuilder.InsertData(
                table: "SubDiamonds",
                columns: new[] { "SubDiamondID", "ProductID" },
                values: new object[] { "D2", "P1" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "E1");

            migrationBuilder.DeleteData(
                table: "SubDiamonds",
                keyColumn: "SubDiamondID",
                keyValue: "D2");

            migrationBuilder.DeleteData(
                table: "Warranties",
                keyColumn: "WarrantyID",
                keyValue: "W1");

            migrationBuilder.DeleteData(
                table: "Diamond",
                keyColumn: "DiamondID",
                keyValue: "D2");

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "ProductID",
                keyValue: "P1");

            migrationBuilder.DeleteData(
                table: "Accessories",
                keyColumn: "AccessoryID",
                keyValue: "A1");

            migrationBuilder.DeleteData(
                table: "Diamond",
                keyColumn: "DiamondID",
                keyValue: "D1");

            migrationBuilder.DeleteData(
                table: "Order",
                keyColumn: "OrderID",
                keyValue: "O1");

            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "C1");

            migrationBuilder.DeleteData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "E2");
        }
    }
}
