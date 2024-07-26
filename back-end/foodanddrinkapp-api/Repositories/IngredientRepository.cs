using FoodAndDrink.Documents;
using FoodAndDrink.Providers.Interfaces;
using FoodAndDrink.Repositories.Interfaces;
using FoodAndDrink.Services.Responses;
using MongoDB.Driver;

namespace FoodAndDrink.Repositories
{
	public class IngredientRepository : IIngredientRepository
	{
		private readonly IMongoDbProvider<IngredientDocument> _mongoDbProvider;

		public IngredientRepository(IMongoDbProvider<IngredientDocument> mongoDbProvider)
		{
			_mongoDbProvider = mongoDbProvider;
		}

		public async Task<RepositoryResponse<List<IngredientDocument>>> GetIngredientList()
		{
			try
			{
				var collection = await _mongoDbProvider.GetCollectionAsync("ingredients");

				var ingredients = await collection.Find(_ => true).ToListAsync();

				return RepositoryResponse<List<IngredientDocument>>.SuccessResult(ingredients);
            }
            catch (Exception ex)
			{
                return RepositoryResponse<List<IngredientDocument>>.FailureResult(ex.Message);
            }
		}

        public async Task<RepositoryResponse<IngredientDocument>> GetIngredient(string id)
        {
            try
            {
                var collection = await _mongoDbProvider.GetCollectionAsync("ingredients");

                var filter = Builders<IngredientDocument>.Filter.Where(doc => doc.Id == id);

                var ingredient = await collection.Find(filter).SingleAsync();

                return RepositoryResponse<IngredientDocument>.SuccessResult(ingredient);
            }
            catch (Exception ex)
            {
                return RepositoryResponse<IngredientDocument>.FailureResult(ex.Message);
            }
        }

        public async Task<RepositoryResponse<List<IngredientDocument>>> GetIngredientSelection(string[] ids)
        {
            try
            {
                var collection = await _mongoDbProvider.GetCollectionAsync("ingredients");

                var filter = Builders<IngredientDocument>.Filter.Where(doc => ids.Contains(doc.Id));

                var ingredients = await collection.Find(filter).ToListAsync();

                return RepositoryResponse<List<IngredientDocument>>.SuccessResult(ingredients);
            }
            catch (Exception ex)
            {
                return RepositoryResponse<List<IngredientDocument>>.FailureResult(ex.Message);
            }
        }

        public async Task<RepositoryResponse<IngredientDocument>> SubmitIngredient(IngredientDocument document)
        {
            try
            {
                var collection = await _mongoDbProvider.GetCollectionAsync("ingredients");

                var filter = Builders<IngredientDocument>.Filter.Where(doc => doc.Name == document.Name);

                var matchedDocument = await collection.Find(filter).FirstOrDefaultAsync();

                var alreadyExists = matchedDocument == null ? false : true;

                if (alreadyExists)
                {
                    return RepositoryResponse<IngredientDocument>.FailureResult("Ingredient already exists");
                }

                await collection.InsertOneAsync(document);

                return RepositoryResponse<IngredientDocument>.SuccessResult(null);
            }
            catch (Exception ex)
            {
                return RepositoryResponse<IngredientDocument>.FailureResult(ex.Message);
            }
        }

        public async Task<RepositoryResponse<IngredientDocument>> SubmitIngredients(List<IngredientDocument> documents)
        {
            try
            {
                var collection = await _mongoDbProvider.GetCollectionAsync("ingredients");
                
                await collection.InsertManyAsync(documents);
                
                return RepositoryResponse<IngredientDocument>.SuccessResult(null);
            }
            catch (Exception ex)
            {
                return RepositoryResponse<IngredientDocument>.FailureResult(ex.Message);
            }
        }
    }
}

