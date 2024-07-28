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
				var result = await _ingredientRepository.GetIngredientList();
                
                if (!result.Success)
                {
                    return ServiceResult<List<IngredientDocument>>.FailureResult($"Ingredient Service Failure: {result.ErrorMessage}");    
                }
                
				return ServiceResult<List<IngredientDocument>>.SuccessResult(result.Data);
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
                var result = await _ingredientRepository.GetIngredient(id);
                
                if (!result.Success)
                {
                    return ServiceResult<IngredientDocument>.FailureResult($"Ingredient Service Failure: {result.ErrorMessage}");
                }
                
                
                return ServiceResult<IngredientDocument>.SuccessResult(result.Data);
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
                var result = await _ingredientRepository.GetIngredientSelection(ids);

                if (!result.Success)
                {
                    return ServiceResult<List<IngredientDocument>>.FailureResult($"Ingredient Service Failure: {result.ErrorMessage}");    
                }
                
                return ServiceResult<List<IngredientDocument>>.SuccessResult(result.Data);
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

                return ServiceResult<IngredientDocument>.SuccessResult();
            }
            catch (Exception ex)
            {
                return ServiceResult<IngredientDocument>.FailureResult(ex.Message);
            }
        }

        public async Task<ServiceResult<Ingredient>> SubmitIngredients(List<Ingredient> ingredients)
        {
            try
            {
                var documents = ingredients.Select(ToIngredientDocument).ToList();
                var result = await _ingredientRepository.SubmitIngredients(documents);

                if (!result.Success)
                {
                    return ServiceResult<Ingredient>.FailureResult($"Ingredient Service Failure: {result.ErrorMessage}");
                }

                return ServiceResult<Ingredient>.SuccessResult();
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
                Type = ingredient.Type,
                IsHealthyOption = ingredient.IsHealthyOption,
                Macro = ingredient.Macro,
                DateAdded = DateTime.UtcNow.Date
            };
        }
    }
}

