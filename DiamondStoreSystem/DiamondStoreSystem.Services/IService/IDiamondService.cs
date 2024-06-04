using DiamondStoreSystem.Business.Interface;
using DiamondStoreSystem.DTO.EntitiesRequest.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiamondStoreSystem.Business.IService
{
    public interface IDiamondService
    {
        public IDSSResult Get();
        public IDSSResult Update(DiamondRequest diamondRequest);
        public IDSSResult Delete(string diamondId);
        public IDSSResult Add(DiamondRequest diamondRequest);
        public IDSSResult GetByID(string diamondId);
        public IDSSResult ShowCertificate(string diamondId);
        public IDSSResult HardDelete(string diamondId);
    }
}
