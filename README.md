# SWD392_NET1701_Group_4_Diamond
 Diamond Store Management project

To initial database. Open terminal in DiamondStoreSystem.Core, then input these command to terminal:

dotnet ef migrations add InitDSSDB

dotnet ef database update InitDSSDB

If you add new model or modify models, you need add these command with InitDSSDB_V(current version + 1)
Example:

dotnet ef migrations add InitDSSDB_V1

dotnet ef database update InitDSSDB_V2
