using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.BusinessLayer.Helpers
{
    public static class ReflectionExtensions
    {
        public static object GetPropertyValue(this object obj, string propertyName)
        {
            if (obj == null) throw new ArgumentNullException(nameof(obj));
            if (propertyName == null) throw new ArgumentNullException(nameof(propertyName));

            PropertyInfo propInfo = obj.GetType().GetProperty(propertyName);
            if (propInfo == null) throw new ArgumentException($"Property '{propertyName}' not found on '{obj.GetType().Name}'");

            return propInfo.GetValue(obj);
        }
    }
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
        public bool TryParseJsonArrayGrades(string jsonString, out List<double> values)
        {
            try
            {
                values = JsonConvert.DeserializeObject<List<double>>(jsonString);
                return values != null;
            }
            catch
            {
                values = null;
                return false;
            }
        }
        public bool TryParseJsonArrayDatetimes(string jsonString, out List<DateTime> values)
        {
            try
            {
                values = JsonConvert.DeserializeObject<List<DateTime>>(jsonString);
                return values != null;
            }
            catch
            {
                values = null;
                return false;
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
