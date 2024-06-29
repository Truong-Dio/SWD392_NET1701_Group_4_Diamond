using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.ResquestModels
{
    public class SubDiamondRequestModel
    {
		private string subDiamondID;

		public string SubDiamondID
		{
			get { return subDiamondID; }
			set { subDiamondID = DiamondID; }
		}
        public string ProductID { get; set; }
        public string DiamondID { get; set; }
    }
}
