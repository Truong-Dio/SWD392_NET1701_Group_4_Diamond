using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
        public string AccountID { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
        public Account Account { get; set; }
        public PayMethod PayMethod { get; set; }
        public bool Block { get; set; }
    }
}
