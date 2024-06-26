using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DiamondStoreSystem.Core.Migrations
{
    public partial class referencekey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OrderId",
                table: "VnPaymentResponses",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "VnpOrderId",
                table: "Orders",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "OrderID",
                keyValue: "O001",
                columns: new[] { "DateOrdered", "PayMethod" },
                values: new object[] { new DateTime(2024, 6, 26, 7, 53, 7, 48, DateTimeKind.Local).AddTicks(3263), 0 });

            migrationBuilder.CreateIndex(
                name: "IX_VnPaymentResponses_OrderId",
                table: "VnPaymentResponses",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_VnpOrderId",
                table: "Orders",
                column: "VnpOrderId",
                unique: true,
                filter: "[VnpOrderId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_VnPaymentResponses_VnpOrderId",
                table: "Orders",
                column: "VnpOrderId",
                principalTable: "VnPaymentResponses",
                principalColumn: "VnpOrderId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_VnPaymentResponses_Orders_OrderId",
                table: "VnPaymentResponses",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "OrderID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_VnPaymentResponses_VnpOrderId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_VnPaymentResponses_Orders_OrderId",
                table: "VnPaymentResponses");

            migrationBuilder.DropIndex(
                name: "IX_VnPaymentResponses_OrderId",
                table: "VnPaymentResponses");

            migrationBuilder.DropIndex(
                name: "IX_Orders_VnpOrderId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "VnPaymentResponses");

            migrationBuilder.DropColumn(
                name: "VnpOrderId",
                table: "Orders");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "OrderID",
                keyValue: "O001",
                columns: new[] { "DateOrdered", "PayMethod" },
                values: new object[] { new DateTime(2024, 6, 26, 2, 55, 49, 857, DateTimeKind.Local).AddTicks(9955), 2 });
        }
    }
}
