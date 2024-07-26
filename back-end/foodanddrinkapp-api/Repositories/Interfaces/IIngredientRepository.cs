using FoodAndDrink.Documents;
using FoodAndDrink.Services.Responses;

namespace FoodAndDrink.Repositories.Interfaces
{
	public interface IIngredientRepository
	{
        public Task<RepositoryResponse<List<IngredientDocument>>> GetIngredientList();
        public Task<RepositoryResponse<IngredientDocument>> GetIngredient(string id);
        public Task<RepositoryResponse<List<IngredientDocument>>> GetIngredientSelection(string[] ids);
        public Task<RepositoryResponse<IngredientDocument>> SubmitIngredient(IngredientDocument document);
        public Task<RepositoryResponse<IngredientDocument>> SubmitIngredients(List<IngredientDocument> documents);
	}
}