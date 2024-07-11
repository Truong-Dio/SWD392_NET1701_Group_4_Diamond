using DiamondStoreSystem.BusinessLayer.IServices;
using Microsoft.Azure.WebJobs;

namespace DiamondStoreSystem.MyWebJobs
{
    public class Functions
    {
        private readonly IWarrantyService _warrantyService;

        public Functions(IWarrantyService warrantyService)
        {
            _warrantyService = warrantyService;
        }

        public async Task CheckExpiredWarranties([TimerTrigger("0 */5 * * * *")] TimerInfo timer, TextWriter log)
        {
            log.WriteLine($"Checking expired warranties at: {DateTime.Now}");
            _warrantyService.ExpiredWarranty();
            await Task.CompletedTask;
        }
    }
}