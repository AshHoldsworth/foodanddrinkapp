using FoodAndDrink.Api.Models;
using FoodAndDrink.Documents;
using FoodAndDrink.Repositories.Interfaces;
using FoodAndDrink.Services.Interfaces;

namespace FoodAndDrink.Services
{
	public class IngredientService : IIngredientService
	{
		private readonly IIngredientRepository _ingredientRepository;

		public IngredientService(IIngredientRepository ingredientRepository)
		{
			_ingredientRepository = ingredientRepository;
		}

		public async Task<ServiceResult<List<IngredientDocument>>> GetIngredientList()
		{
			try
			{
				var ingredients = await _ingredientRepository.GetIngredientList();
				return ServiceResult<List<IngredientDocument>>.SuccessResult(ingredients.Data);
			}
			catch (Exception ex)
			{
				return ServiceResult<List<IngredientDocument>>.FailureResult(ex.Message);
			}
		}

        public async Task<ServiceResult<IngredientDocument>> GetIngredient(string id)
        {
            try
            {
                var ingredient = await _ingredientRepository.GetIngredient(id);
                return ServiceResult<IngredientDocument>.SuccessResult(ingredient.Data);
            }
            catch (Exception ex)
            {
                return ServiceResult<IngredientDocument>.FailureResult(ex.Message);
            }
        }

        public async Task<ServiceResult<List<IngredientDocument>>> GetIngredientSelection(string[] ids)
        {
            try
            {
                var ingredients = await _ingredientRepository.GetIngredientSelection(ids);
                return ServiceResult<List<IngredientDocument>>.SuccessResult(ingredients.Data);
            }
            catch (Exception ex)
            {
                return ServiceResult<List<IngredientDocument>>.FailureResult(ex.Message);
            }
        }


        public async Task<ServiceResult<IngredientDocument>> SubmitIngredient(Ingredient ingredient)
        {
            try
            {
                var document = ToIngredientDocument(ingredient);
                var result = await _ingredientRepository.SubmitIngredient(document);

                if(!result.Success)
                {
                    return ServiceResult<IngredientDocument>.FailureResult($"Ingredient Service Failure: {result.ErrorMessage}");
                }

                return ServiceResult<IngredientDocument>.SuccessResult(null);
            }
            catch (Exception ex)
            {
                return ServiceResult<IngredientDocument>.FailureResult(ex.Message);
            }
        }

        public async Task<ServiceResult<Ingredient>> SubmitIngredients(List<string> ingredients)
        {
            try
            {
                var ingredientList = ingredients.Select(i => new Ingredient(i)).ToList();
                var documents = ingredientList.Select(ToIngredientDocument).ToList();
                var result = await _ingredientRepository.SubmitIngredients(documents);

                if (!result.Success)
                {
                    return ServiceResult<Ingredient>.FailureResult($"Ingredient Service Failure: {result.ErrorMessage}");
                }

                return ServiceResult<Ingredient>.SuccessResult(null);
            }
            catch (Exception ex)
            {
                return ServiceResult<Ingredient>.FailureResult(ex.Message);
            }
        }

        private IngredientDocument ToIngredientDocument(Ingredient ingredient)
        {
            return new IngredientDocument
            {
                Name = ingredient.Name,
                DateAdded = DateTime.UtcNow.Date
            };
        }
    }
}

