using DiamondStoreSystem.BusinessLayer.AppStart;
using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.Services;
using DiamondStoreSystem.MyWorkerService;

public class Program
{
    public static void Main(string[] args)
    {
        var host = new HostBuilder()
            .ConfigureWebJobs(webJobsBuilder =>
            {
                webJobsBuilder.AddAzureStorageCoreServices();
                webJobsBuilder.AddAzureStorageQueues();
            })
            .ConfigureAppConfiguration((context, config) =>
            {
                config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
                config.AddEnvironmentVariables();
            })
            .ConfigureServices((hostContext, services) =>
            {
                services.AddHostedService<Worker>();
                services.ConfigDI();
                services.AddAutoMapper(typeof(MapperConfig));
            })
            .UseConsoleLifetime()
            .Build();

        host.Run();
    }
}
