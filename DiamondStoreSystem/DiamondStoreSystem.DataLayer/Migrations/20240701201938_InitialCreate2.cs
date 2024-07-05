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
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Accessories_AccessoryID",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_AccessoryID",
                table: "Products");

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

            migrationBuilder.CreateIndex(
                name: "IX_Products_AccessoryID",
                table: "Products",
                column: "AccessoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Accessories_AccessoryID",
                table: "Products",
                column: "AccessoryID",
                principalTable: "Accessories",
                principalColumn: "AccessoryID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Accessories_AccessoryID",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_AccessoryID",
                table: "Products");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "C001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 1, 9, 39, 24, 325, DateTimeKind.Local).AddTicks(2167));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 1, 9, 39, 24, 325, DateTimeKind.Local).AddTicks(2108));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S002",
                column: "JoinDate",
                value: new DateTime(2024, 7, 1, 9, 39, 24, 325, DateTimeKind.Local).AddTicks(2148));

            migrationBuilder.CreateIndex(
                name: "IX_Products_AccessoryID",
                table: "Products",
                column: "AccessoryID",
                unique: true,
                filter: "[AccessoryID] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Accessories_AccessoryID",
                table: "Products",
                column: "AccessoryID",
                principalTable: "Accessories",
                principalColumn: "AccessoryID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
