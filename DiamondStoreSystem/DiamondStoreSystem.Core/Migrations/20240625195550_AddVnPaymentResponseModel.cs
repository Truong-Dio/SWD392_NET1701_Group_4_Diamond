using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DiamondStoreSystem.Core.Migrations
{
    public partial class AddVnPaymentResponseModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "VnPaymentResponses",
                columns: table => new
                {
                    VnpOrderId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Success = table.Column<bool>(type: "bit", nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrderDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaymentId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TransactionId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Token = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VnPayResponseCode = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VnPaymentResponses", x => x.VnpOrderId);
                });

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "OrderID",
                keyValue: "O001",
                column: "DateOrdered",
                value: new DateTime(2024, 6, 26, 2, 55, 49, 857, DateTimeKind.Local).AddTicks(9955));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VnPaymentResponses");

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "OrderID",
                keyValue: "O001",
                column: "DateOrdered",
                value: new DateTime(2024, 6, 20, 14, 54, 33, 973, DateTimeKind.Local).AddTicks(4144));
        }
    }
}
