/****** Object:  Table [dbo].[Accessories]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accessories](
	[AccessoryID] [nvarchar](450) NOT NULL,
	[AccessoryName] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Material] [int] NOT NULL,
	[Style] [int] NOT NULL,
	[Brand] [nvarchar](max) NOT NULL,
	[Block] [bit] NOT NULL,
	[Price] [float] NOT NULL,
	[UnitInStock] [int] NOT NULL,
	[SKU] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Accessories] PRIMARY KEY CLUSTERED 
(
	[AccessoryID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Accounts]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounts](
	[AccountID] [nvarchar](450) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[Phone] [decimal](18, 2) NOT NULL,
	[Address] [nvarchar](max) NOT NULL,
	[Gender] [int] NOT NULL,
	[DOB] [datetime2](7) NOT NULL,
	[JoinDate] [datetime2](7) NOT NULL,
	[LoyaltyPoint] [int] NULL,
	[Block] [bit] NOT NULL,
	[Role] [int] NOT NULL,
	[WorkingSchedule] [int] NOT NULL,
 CONSTRAINT [PK_Accounts] PRIMARY KEY CLUSTERED 
(
	[AccountID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Diamond]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Diamond](
	[DiamondID] [nvarchar](450) NOT NULL,
	[Origin] [nvarchar](max) NOT NULL,
	[LabCreated] [int] NOT NULL,
	[TablePercent] [float] NOT NULL,
	[DepthPercent] [float] NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[GIAReportNumber] [int] NOT NULL,
	[IssueDate] [datetime2](7) NOT NULL,
	[Shape] [int] NOT NULL,
	[CaratWeight] [float] NOT NULL,
	[ColorGrade] [int] NOT NULL,
	[ClarityGrade] [int] NOT NULL,
	[CutGrade] [int] NOT NULL,
	[PolishGrade] [int] NOT NULL,
	[SymmetryGrade] [int] NOT NULL,
	[FluoresceneGrade] [int] NOT NULL,
	[Inscription] [nvarchar](max) NOT NULL,
	[Height] [float] NOT NULL,
	[Width] [float] NOT NULL,
	[Length] [float] NOT NULL,
	[Price] [float] NOT NULL,
	[Block] [bit] NOT NULL,
	[SKU] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Diamond] PRIMARY KEY CLUSTERED 
(
	[DiamondID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order](
	[OrderID] [nvarchar](450) NOT NULL,
	[OrderStatus] [int] NOT NULL,
	[DateOrdered] [datetime2](7) NOT NULL,
	[DateReceived] [datetime2](7) NULL,
	[TotalPrice] [float] NOT NULL,
	[CustomerID] [nvarchar](450) NOT NULL,
	[EmployeeAssignID] [nvarchar](450) NOT NULL,
	[PayMethod] [int] NOT NULL,
	[Block] [bit] NOT NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductID] [nvarchar](450) NOT NULL,
	[Price] [float] NOT NULL,
	[Block] [bit] NOT NULL,
	[AccessoryID] [nvarchar](450) NOT NULL,
	[OrderID] [nvarchar](450) NOT NULL,
	[MainDiamondID] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SubDiamonds]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubDiamonds](
	[SubDiamondID] [nvarchar](450) NOT NULL,
	[ProductID] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_SubDiamonds] PRIMARY KEY CLUSTERED 
(
	[SubDiamondID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VnPaymentResponses]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VnPaymentResponses](
	[VnpOrderId] [nvarchar](450) NOT NULL,
	[Success] [bit] NOT NULL,
	[PaymentMethod] [nvarchar](max) NOT NULL,
	[OrderDescription] [nvarchar](max) NOT NULL,
	[TransactionId] [nvarchar](max) NOT NULL,
	[Token] [nvarchar](max) NOT NULL,
	[VnPayResponseCode] [nvarchar](max) NOT NULL,
	[OrderId] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_VnPaymentResponses] PRIMARY KEY CLUSTERED 
(
	[VnpOrderId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Warranties]    Script Date: 6/30/2024 8:31:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Warranties](
	[WarrantyID] [nvarchar](450) NOT NULL,
	[IssueDate] [datetime2](7) NOT NULL,
	[ExpiredDate] [datetime2](7) NOT NULL,
	[Block] [bit] NOT NULL,
	[ProductID] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Warranties] PRIMARY KEY CLUSTERED 
(
	[WarrantyID] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_Accounts_CustomerID] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Accounts] ([AccountID])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_Accounts_CustomerID]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_Accounts_EmployeeAssignID] FOREIGN KEY([EmployeeAssignID])
REFERENCES [dbo].[Accounts] ([AccountID])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_Accounts_EmployeeAssignID]
GO
ALTER TABLE [dbo].[Order]  WITH CHECK ADD  CONSTRAINT [FK_Order_VnPaymentResponses_OrderID] FOREIGN KEY([OrderID])
REFERENCES [dbo].[VnPaymentResponses] ([VnpOrderId])
GO
ALTER TABLE [dbo].[Order] CHECK CONSTRAINT [FK_Order_VnPaymentResponses_OrderID]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Accessories_AccessoryID] FOREIGN KEY([AccessoryID])
REFERENCES [dbo].[Accessories] ([AccessoryID])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Accessories_AccessoryID]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Diamond_MainDiamondID] FOREIGN KEY([MainDiamondID])
REFERENCES [dbo].[Diamond] ([DiamondID])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Diamond_MainDiamondID]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Order_OrderID] FOREIGN KEY([OrderID])
REFERENCES [dbo].[Order] ([OrderID])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Order_OrderID]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Warranties_ProductID] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Warranties] ([WarrantyID])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Warranties_ProductID]
GO
ALTER TABLE [dbo].[SubDiamonds]  WITH CHECK ADD  CONSTRAINT [FK_SubDiamonds_Diamond_SubDiamondID] FOREIGN KEY([SubDiamondID])
REFERENCES [dbo].[Diamond] ([DiamondID])
GO
ALTER TABLE [dbo].[SubDiamonds] CHECK CONSTRAINT [FK_SubDiamonds_Diamond_SubDiamondID]
GO
ALTER TABLE [dbo].[SubDiamonds]  WITH CHECK ADD  CONSTRAINT [FK_SubDiamonds_Products_ProductID] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Products] ([ProductID])
GO
ALTER TABLE [dbo].[SubDiamonds] CHECK CONSTRAINT [FK_SubDiamonds_Products_ProductID]
GO
