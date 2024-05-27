using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStore.Data.Entities
{
    public class OrderDetail
    {
        [Key]
        public string OrderDetailID { get; set; }
        public string ProductID { get; set; }
        public string OrderID { get; set; }
        public int Quatity { get; set; }
        public double Price { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }
        public bool Status { get; set; } = true;
    }
}
