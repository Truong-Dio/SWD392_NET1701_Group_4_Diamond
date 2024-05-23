using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Core.Models
{
    public class Employee
    {
        [Key]
        public string EmpID {  get; set; }

        [Required]
        public string EmpName { get; set; }

        [Required]
        [StringLength(160)]
        public string EmpAddress { get; set; }

        [Required]
        public string EmpGender { get; set; }

        [Required]
        public int EmpPhone { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        [Required]
        public DateTime EmpJoinDate { get; set; }

        //[ForeignKey("AccountID")]
        public string AccountID { get; set; }

        public virtual Account Account { get; set; }

        public virtual ICollection<PurchaseOrder> PurchaseOrders { get; set; }
    }
}
