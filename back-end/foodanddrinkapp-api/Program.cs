using FoodAndDrink.Providers;
using FoodAndDrink.Configuration;
using FoodAndDrink.Documents;
using FoodAndDrink.Providers.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddHealthChecks();

builder.Services.Configure<MongoDbConfig>(builder.Configuration.GetSection("MongoDb"));

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddSingleton<IMongoDbProvider<FoodDocument>, LocalMongoDbProvider<FoodDocument>>();
    builder.Services.AddSingleton<IMongoDbProvider<DrinkDocument>, LocalMongoDbProvider<DrinkDocument>>();
    builder.Services.AddSingleton<IMongoDbProvider<IngredientDocument>, LocalMongoDbProvider<IngredientDocument>>();
}

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
