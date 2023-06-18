using FoodAndDrink.Providers;
using FoodAndDrink.Configuration;
using FoodAndDrink.Documents;
using FoodAndDrink.Providers.Interfaces;
using FoodAndDrink.Repositories.Interfaces;
using FoodAndDrink.Repositories;
using FoodAndDrink.Services.Interfaces;
using FoodAndDrink;
using FoodAndDrink.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddHealthChecks();

builder.Services.Configure<MongoDbConfig>(builder.Configuration.GetSection("MongoDb"));

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddSingleton<IMongoDbProvider<ConsumableDocument>, LocalMongoDbProvider<ConsumableDocument>>();
    builder.Services.AddSingleton<IMongoDbProvider<IngredientDocument>, LocalMongoDbProvider<IngredientDocument>>();
}

builder.Services.AddScoped<IConsumableRepository, ConsumableRepository>();
builder.Services.AddScoped<IConsumableService, ConsumableService>();

builder.Services.AddScoped<IIngredientRepository, IngredientRepository>();
builder.Services.AddScoped<IIngredientService, IngredientService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllHeaders",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors("AllowAllHeaders");

app.UseAuthorization();

app.MapControllers();

app.MapHealthChecks("/health");

app.Run();
