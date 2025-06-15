using MongoDB.Driver;

namespace FoodAndDrink.Providers.Interfaces
{	
	public interface IMongoDbProvider<TDocument>
	{
		Task<IMongoCollection<TDocument>> GetCollectionAsync(string collectionName);
	}
}