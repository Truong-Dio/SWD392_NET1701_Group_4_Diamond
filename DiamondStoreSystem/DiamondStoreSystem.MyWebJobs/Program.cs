using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.Services;
using DiamondStoreSystem.MyWebJobs;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

internal class Program
{
    private static async Task Main(string[] args)
    {
		try
		{
            var builder = new HostBuilder();
            builder.UseEnvironment(EnvironmentName.Development);
            builder.ConfigureWebJobs(b =>
            {
                b.AddAzureStorageCoreServices();
                b.AddAzureStorageQueues();
            });

            builder.ConfigureServices((context, services) =>
            {
                services.AddSingleton<IWarrantyService, WarrantyService>();
                services.AddSingleton<Functions>();
            });

            var host = builder.Build();
            using (host)
            {
                await host.RunAsync();
            }
        }
		catch (Exception ex)
		{

			throw;
		}
    }
}