using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.Services;

namespace DiamondStoreSystem.MyWorkerService
{
    public class Worker : BackgroundService
    {
        private readonly IWarrantyService _warrantyService;
        private readonly ILogger<Worker> _logger;


        public Worker(ILogger<Worker> logger, IWarrantyService warrantyService)
        {
            _warrantyService = warrantyService;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                if (_logger.IsEnabled(LogLevel.Information))
                {
                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                }
                var result = await _warrantyService.AutoBlockExpiredWarranty();
                _logger.LogInformation($"{result.Status} - {result.Message}");
                await Task.Delay(1000, stoppingToken);
            }
        }
    }
}
