﻿using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest
{
    public class OrderRequest
    {
        [Key]
        public string OrderID { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public DateTime DateOrdered { get; set; }
        public DateTime? DateReceived { get; set; }
        public double TotalPrice { get; set; }
        public string AccountID { get; set; }
        public bool Status { get; set; }
    }
}
