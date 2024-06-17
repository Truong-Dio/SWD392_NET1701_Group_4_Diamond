using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesRequest.Order
{
    public class OrderRequest
    {
        public string OrderID { get; set; }
        public OrderStatus OrderStatus { get; set; }
        public DateTime DateOrdered { get; set; }
        public DateTime? DateReceived { get; set; }
        public double TotalPrice { get; set; }
        public string AccountID { get; set; }
        public PayMethod PayMethod { get; set; }
        public string EmployeeAssignID { get; set; }
    }
}
