using Microsoft.EntityFrameworkCore.Migrations;

namespace DiamondStoreSystem.Core.Migrations
{
    public partial class DSSDb_4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Accounts_AccountID",
                table: "Employees");

            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseOrders_Customers_UserUID",
                table: "PurchaseOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseOrders_Employees_EmpID",
                table: "PurchaseOrders");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseOrders_EmpID",
                table: "PurchaseOrders");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseOrders_UserUID",
                table: "PurchaseOrders");

            migrationBuilder.AlterColumn<string>(
                name: "UserUID",
                table: "PurchaseOrders",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "EmpID",
                table: "PurchaseOrders",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

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
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrders_CustomerUserUID",
                table: "PurchaseOrders",
                column: "CustomerUserUID");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrders_EmployeeEmpID",
                table: "PurchaseOrders",
                column: "EmployeeEmpID");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.DropColumn(
                name: "CustomerUserUID",
                table: "PurchaseOrders");

            migrationBuilder.DropColumn(
                name: "EmployeeEmpID",
                table: "PurchaseOrders");

            migrationBuilder.AlterColumn<string>(
                name: "UserUID",
                table: "PurchaseOrders",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "EmpID",
                table: "PurchaseOrders",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AccountID",
                table: "Employees",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrders_EmpID",
                table: "PurchaseOrders",
                column: "EmpID");

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrders_UserUID",
                table: "PurchaseOrders",
                column: "UserUID");

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Accounts_AccountID",
                table: "Employees",
                column: "AccountID",
                principalTable: "Accounts",
                principalColumn: "AccountID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseOrders_Customers_UserUID",
                table: "PurchaseOrders",
                column: "UserUID",
                principalTable: "Customers",
                principalColumn: "UserUID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseOrders_Employees_EmpID",
                table: "PurchaseOrders",
                column: "EmpID",
                principalTable: "Employees",
                principalColumn: "EmpID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
