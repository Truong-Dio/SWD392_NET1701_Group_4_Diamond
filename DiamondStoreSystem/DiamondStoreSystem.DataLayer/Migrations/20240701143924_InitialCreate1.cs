using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DiamondStoreSystem.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
                table: "Diamond",
                type: "nvarchar(max)",
                nullable: true);

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

            migrationBuilder.UpdateData(
                table: "Diamond",
                keyColumn: "DiamondID",
                keyValue: "D001",
                column: "ImageURL",
                value: "https://th.bing.com/th/id/R.f570735ea23fb999beba0f0ab75776bf?rik=CmY%2bEAjezLt7Fw&riu=http%3a%2f%2fftwg.org%2fwp-content%2fuploads%2f2018%2f09%2fAdobeStock_103498617-1140x458.jpeg&ehk=j4i4O38TXR1VIDNSDUiMnV9aUME6dlkf0GM6BpnbKbk%3d&risl=&pid=ImgRaw&r=0");

            migrationBuilder.UpdateData(
                table: "Diamond",
                keyColumn: "DiamondID",
                keyValue: "D002",
                column: "ImageURL",
                value: "https://assets.entrepreneur.com/content/3x2/2000/20160305000536-diamond.jpeg");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "Diamond");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "C001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 1, 15, 45, 21, 762, DateTimeKind.Local).AddTicks(9888));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S001",
                column: "JoinDate",
                value: new DateTime(2024, 7, 1, 15, 45, 21, 762, DateTimeKind.Local).AddTicks(9829));

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountID",
                keyValue: "S002",
                column: "JoinDate",
                value: new DateTime(2024, 7, 1, 15, 45, 21, 762, DateTimeKind.Local).AddTicks(9869));
        }
    }
}
