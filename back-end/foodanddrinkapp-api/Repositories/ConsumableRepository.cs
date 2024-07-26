using FoodAndDrink.Documents;
using FoodAndDrink.Providers.Interfaces;
using FoodAndDrink.Repositories.Interfaces;
using FoodAndDrink.Services.Responses;
using MongoDB.Driver;

namespace FoodAndDrink.Repositories
{
	public class ConsumableRepository : IConsumableRepository
    {
		private IMongoDbProvider<ConsumableDocument> _mongoDbProvider;

		public ConsumableRepository(IMongoDbProvider<ConsumableDocument> mongoDbProvider)
		{
			_mongoDbProvider = mongoDbProvider;
		}

		public async Task<RepositoryResponse<List<ConsumableDocument>>> GetConsumableList(string type)
		{
            try
            {
                var collection = await _mongoDbProvider.GetCollectionAsync("consumables");

                var filter = Builders<ConsumableDocument>.Filter.Where(doc => doc.Type == type);

                var documents = await collection.Find(filter).ToListAsync();

                return RepositoryResponse<List<ConsumableDocument>>.SuccessResult(documents);
            }
            catch (Exception ex)
            {
                return RepositoryResponse<List<ConsumableDocument>>.FailureResult(ex.Message);
            }
        }

		public async Task<RepositoryResponse<ConsumableDocument>> GetConsumable(string id)
		{
			try
			{
				var collection = await _mongoDbProvider.GetCollectionAsync("consumables");

				var filter = Builders<ConsumableDocument>.Filter.Where(doc => doc.Id == id);

				var document = await collection.Find(filter).SingleAsync();

				return RepositoryResponse<ConsumableDocument>.SuccessResult(document);
			}
			catch (Exception ex)
			{
                return RepositoryResponse<ConsumableDocument>.FailureResult(ex.Message);
            }
        }

		public async Task<RepositoryResponse<ConsumableDocument>> SubmitConsumable(ConsumableDocument document)
		{
			try
			{
				var collection = await _mongoDbProvider.GetCollectionAsync("consumables");

				var filter = Builders<ConsumableDocument>.Filter.Where(doc => doc.Name == document.Name);

                var matchedDocument = await collection.Find(filter).FirstOrDefaultAsync();

                var alreadyExists = matchedDocument == null ? false : true;

                if (alreadyExists)
				{
                    return RepositoryResponse<ConsumableDocument>.FailureResult($"Consumable {document.Name} already exists");
                }

				collection.InsertOne(document);

				return RepositoryResponse<ConsumableDocument>.SuccessResult(null);
			}
			catch (Exception ex)
			{
				return RepositoryResponse<ConsumableDocument>.FailureResult(ex.Message);
			}
		}
	}
}

