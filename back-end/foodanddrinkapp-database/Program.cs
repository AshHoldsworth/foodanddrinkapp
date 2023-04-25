using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.SqlClient;
using System;
using System.IO;
using Dapper;
using FluentMigrator.Runner;
using FluentMigrator.Runner.Initialization;

internal class Program
{
    private static void Main(string[] agrs)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional:false, reloadOnChange: false)
            .Build();

        CreateDatabase(configuration);

        var environmentNamespace = "local";
        var serviceProvider = CreateServices(configuration, environmentNamespace);

        using var scope = serviceProvider.CreateScope();
        UpdateDatabase(scope.ServiceProvider);

    }

    private static void CreateDatabase(IConfigurationRoot configuration)
    {
        var databaseName = configuration["Database:CreateDatabase"];

        if (databaseName != null)
        {
            var connectionString = configuration["Database:ConnectionString"];
            var sql = @$"IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = '{databaseName}')
                            BEGIN
                              CREATE DATABASE [{databaseName}];
                            END;";

            using (var connection = new SqlConnection(connectionString))
            {
                Console.WriteLine($"Creating database: {databaseName}");
                connection.Execute(sql);
                Console.WriteLine("Created database...");
            }
        }
    }

    private static IServiceProvider CreateServices(IConfigurationRoot configuration, string environmentNamespace)
    {
        return new ServiceCollection()
            .AddFluentMigratorCore()
            .ConfigureRunner(rb => rb
                .AddSqlServer()
                .WithGlobalConnectionString(configuration["Database:ConnectionString"]))
            .AddLogging(lb => lb.AddFluentMigratorConsole())
            .Configure<RunnerOptions>(opt =>
            {
                opt.Tags = new[] { environmentNamespace };
            })
            .BuildServiceProvider(false);
    }

    private static void UpdateDatabase(IServiceProvider serviceProvider)
    {
        var runner = serviceProvider.GetRequiredService<IMigrationRunner>();

        Console.WriteLine("MigrateUp started:");
        runner.MigrateUp();
        Console.WriteLine("Migrations Finished...");
    }
}