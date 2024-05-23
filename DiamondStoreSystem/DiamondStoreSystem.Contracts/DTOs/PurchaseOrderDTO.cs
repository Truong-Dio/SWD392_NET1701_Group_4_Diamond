using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Contracts.DTOs
{
    public class PurchaseOrderDTO
    {
        public string POID { get; set; }

        public OrderStatus OrderStatus { get; set; }

        public DateTime DateOrdered { get; set; }

        public DateTime DateReceived { get; set;}

        public int OrderTotal { get; set; }

        public string UserUID {  get; set; }
        
        public string EmpID { get; set; }
    }
}
