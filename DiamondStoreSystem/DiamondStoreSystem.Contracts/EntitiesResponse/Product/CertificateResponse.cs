using DiamondStoreSystem.Common.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.DTO.EntitiesResponse.Product
{
    public class CertificateResponse
    {
        public int GIAReportNumber { get; set; }
        public Shape Shaping { get; set; }
        public Grade CutGrade { get; set; }
        public double Height { get; set; }
        public double Width { get; set; }
        public double Length { get; set; }
        public double CaratWeight { get; set; }
        public ColorGrade ColorGrade { get; set; }
        public ClarityGrade ClarityGrade { get; set; }
        public Grade PolishGrade { get; set; }
        public Grade SymmetryGrade { get; set; }
        public Grade FluoresceneGrade { get; set; }
    }
}
