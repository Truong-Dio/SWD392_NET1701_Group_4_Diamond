using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DiamondStoreSystem.Core.Migrations
{
    public partial class InitialCreate_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "C001",
                column: "Password",
                value: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "E001",
                column: "Password",
                value: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "E002",
                column: "Password",
                value: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "OrderID",
                keyValue: "O001",
                column: "DateOrdered",
                value: new DateTime(2024, 6, 20, 14, 54, 33, 973, DateTimeKind.Local).AddTicks(4144));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "C001",
                column: "Password",
                value: "password");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "E001",
                column: "Password",
                value: "password");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "E002",
                column: "Password",
                value: "string");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "OrderID",
                keyValue: "O001",
                column: "DateOrdered",
                value: new DateTime(2024, 6, 18, 6, 14, 9, 244, DateTimeKind.Local).AddTicks(469));
        }
    }
}
