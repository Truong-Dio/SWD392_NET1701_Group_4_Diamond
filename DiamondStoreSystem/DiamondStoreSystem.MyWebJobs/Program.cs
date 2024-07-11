using DiamondStoreSystem.BusinessLayer.IServices;
using DiamondStoreSystem.BusinessLayer.Services;
using DiamondStoreSystem.MyWebJobs;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = new HostBuilder();
builder.ConfigureWebJobs(b =>
{
    b.AddAzureStorageCoreServices();
    b.AddTimers();
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