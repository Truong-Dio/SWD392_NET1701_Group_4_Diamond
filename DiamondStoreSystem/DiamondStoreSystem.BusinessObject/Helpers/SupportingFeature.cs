using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.Helpers
{
    public class SupportingFeature
    {
        private static SupportingFeature instance = null;
        private static readonly object instanceLock = new object();
        public static SupportingFeature Instance
        {
            get
            {
                lock (instanceLock)
                {
                    if (instance == null)
                    {
                        instance = new SupportingFeature();
                    }
                    return instance;
                }
            }
        }
        public Dictionary<int, string> GetEnumName<TEnum>()
        {
            Dictionary<int, string> enumValues = new Dictionary<int, string>();

            foreach (int e in Enum.GetValues(typeof(TEnum)))
            {
                enumValues.Add(e, Enum.GetName(typeof(TEnum), e));
            }

            return enumValues;
        }
    }
}
