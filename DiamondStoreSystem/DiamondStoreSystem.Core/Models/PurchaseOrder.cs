using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.Models
{
    public class PurchaseOrder
    {
        [Key]
        public string POID { get; set; }

        [Required]
        public OrderStatus OrderStatus { get; set; }

        [Required]
        public DateTime DateOrdered { get; set; }

        public DateTime DateReceived { get; set;}

        [Required]
        public int OrderTotal { get; set; }

        //[ForeignKey("UserUID")]
        public string UserUID {  get; set; }
        
        //[ForeignKey("EmpID")]
        public string EmpID { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
