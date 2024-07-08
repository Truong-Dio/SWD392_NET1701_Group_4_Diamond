using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DiamondStoreSystem.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Accessories",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Accessories",
                keyColumn: "AccessoryID",
                keyValue: "A001",
                column: "ImageUrl",
                value: null);

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "C001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 5, 21, 5, 52, 237, DateTimeKind.Local).AddTicks(5141));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 5, 21, 5, 52, 237, DateTimeKind.Local).AddTicks(5087));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S002",
                column: "JoinDate",
                value: new DateTime(2024, 7, 5, 21, 5, 52, 237, DateTimeKind.Local).AddTicks(5119));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Accessories");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "C001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 2, 3, 19, 38, 170, DateTimeKind.Local).AddTicks(5533));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 2, 3, 19, 38, 170, DateTimeKind.Local).AddTicks(5465));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S002",
                column: "JoinDate",
                value: new DateTime(2024, 7, 2, 3, 19, 38, 170, DateTimeKind.Local).AddTicks(5512));
        }
    }
}
