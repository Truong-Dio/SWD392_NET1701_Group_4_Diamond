using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DiamondStoreSystem.DTO.Entities
{
    public class Order
    {
        [Key]
        public string OrderID { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public DateTime DateOrdered { get; set; }
        public DateTime? DateReceived { get; set; }
        public double TotalPrice { get; set; }
        public string AccountID { get; set; }  // Customer ID
        public string EmployeeAssignID { get; set; }  // Employee ID
        public Account Account { get; set; }  // Navigation property for Customer
        public Account EmployeeAccount { get; set; }  // Navigation property for Employee
        public ICollection<OrderDetail> OrderDetails { get; set; }
        public PayMethod PayMethod { get; set; }
        public bool Block { get; set; }

        [ForeignKey("VnpOrderId")]
        public VnPaymentResponse VnPaymentResponse { get; set; }
    }
}
