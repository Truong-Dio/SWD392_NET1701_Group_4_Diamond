using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Contracts.DTOs
{
    public class EmployeeDTO
    {
        public string EmpID { get; set; }

        public string EmpName { get; set; }

        public string EmpAddress { get; set; }

        public string EmpGender { get; set; }

        public int EmpPhone { get; set; }

        public DateTime DOB { get; set; }

        public DateTime EmpJoinDate { get; set; }

        public string AccountID { get; set; }
    }
}
