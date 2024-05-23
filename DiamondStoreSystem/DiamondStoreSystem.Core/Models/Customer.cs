using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.Models
{
    public class Customer
    {
        [Key]
        public string UserUID { get; set; }

        [Required]
        [StringLength(50)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        [StringLength(160)]
        public string Address { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public int Phone { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        [Required]
        public DateTime JoinDate { get; set; }

        [Required]
        public int LoyaltyPoint { get; set; }

        //[ForeignKey("AccountID")]
        public string AccountID { get; set; }

        public virtual Account Account { get; set; }
        
        public virtual ICollection<PurchaseOrder> PurchaseOrders { get; set;}
    }
}
