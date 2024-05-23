using Microsoft.EntityFrameworkCore.Migrations;

namespace DiamondStoreSystem.Core.Migrations
{
    public partial class DSSDb_6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_Accounts_AccountID",
                table: "Customers");

            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Accounts_AccountID",
                table: "Employees");

            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseOrders_Customers_CustomerUserUID",
                table: "PurchaseOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseOrders_Employees_EmployeeEmpID",
                table: "PurchaseOrders");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseOrders_CustomerUserUID",
                table: "PurchaseOrders");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseOrders_EmployeeEmpID",
                table: "PurchaseOrders");

            migrationBuilder.DropIndex(
                name: "IX_Employees_AccountID",
                table: "Employees");

            migrationBuilder.DropIndex(
                name: "IX_Customers_AccountID",
                table: "Customers");

            migrationBuilder.DropColumn(
                name: "CustomerUserUID",
                table: "PurchaseOrders");

            migrationBuilder.DropColumn(
                name: "EmployeeEmpID",
                table: "PurchaseOrders");

            migrationBuilder.AlterColumn<string>(
                name: "AccountID",
                table: "Employees",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "AccountID",
                table: "Customers",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CustomerUserUID",
                table: "PurchaseOrders",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EmployeeEmpID",
                table: "PurchaseOrders",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AccountID",
                table: "Employees",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "AccountID",
                table: "Customers",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrders_CustomerUserUID",
                table: "PurchaseOrders",
                column: "CustomerUserUID");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrders_EmployeeEmpID",
                table: "PurchaseOrders",
                column: "EmployeeEmpID");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_AccountID",
                table: "Employees",
                column: "AccountID");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_AccountID",
                table: "Customers",
                column: "AccountID");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_Accounts_AccountID",
                table: "Customers",
                column: "AccountID",
                principalTable: "Accounts",
                principalColumn: "AccountID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Accounts_AccountID",
                table: "Employees",
                column: "AccountID",
                principalTable: "Accounts",
                principalColumn: "AccountID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseOrders_Customers_CustomerUserUID",
                table: "PurchaseOrders",
                column: "CustomerUserUID",
                principalTable: "Customers",
                principalColumn: "UserUID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseOrders_Employees_EmployeeEmpID",
                table: "PurchaseOrders",
                column: "EmployeeEmpID",
                principalTable: "Employees",
                principalColumn: "EmpID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
