using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesResponse.Order
{
    public class OrderResponse
    {
        public string OrderID { get; set; }
        public string OrderStatus { get; set; }
        public DateTime DateOrdered { get; set; }
        public DateTime? DateReceived { get; set; }
        public double TotalPrice { get; set; }
        public string AccountID { get; set; }
        public string PayMethod { get; set; }
        public string AccessoryID {  get; set; }
        public string EmployeeAssignID { get; set; }
    }
}
