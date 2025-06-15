using FoodAndDrink.Configuration;
using FoodAndDrink.Providers.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace FoodAndDrink.Providers
{
    public class LocalMongoDbProvider<TDocument> : IMongoDbProvider<TDocument>
    {
        private readonly MongoDbConfig _config;

        public LocalMongoDbProvider(IOptions<MongoDbConfig> config)
        {
            _config = config.Value;
        }

        public Task<IMongoCollection<TDocument>> GetCollectionAsync(string collectionName)
        {
            var mongoClient = new MongoClient(_config.ConnectionString);

            var database = mongoClient.GetDatabase(_config.Database);

            var collection = database.GetCollection<TDocument>(collectionName);

            return Task.FromResult(collection);
        }
    }
}
