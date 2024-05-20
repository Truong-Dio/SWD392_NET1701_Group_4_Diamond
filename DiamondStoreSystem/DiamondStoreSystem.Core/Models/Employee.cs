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

        [ForeignKey("AccountID")]
        public Account Account { get; set; }
    }
}
