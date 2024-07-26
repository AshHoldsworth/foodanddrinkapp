using FoodAndDrink.Api.Models;
using FoodAndDrink.Documents;
using FoodAndDrink.Repositories.Interfaces;
using FoodAndDrink.Services;
using FoodAndDrink.Services.Interfaces;

namespace FoodAndDrink
{
	public class ConsumableService : IConsumableService
	{
        private IConsumableRepository _consumableRepository;

		public ConsumableService(IConsumableRepository consumableRepository)
		{
            _consumableRepository = consumableRepository;
		}

        public async Task<ServiceResult<List<ConsumableDocument>>> GetConsumableList(string type)
        {
            try
            {
                var consumables = await _consumableRepository.GetConsumableList(type);
                return ServiceResult<List<ConsumableDocument>>.SuccessResult(consumables.Data);
            }
            catch (Exception ex)
            {
                return ServiceResult<List<ConsumableDocument>>.FailureResult(ex.Message);
            }
        }

        public async Task<ServiceResult<ConsumableDocument>> GetConsumable(string id)
        {
            try
            {
                var consumable = await _consumableRepository.GetConsumable(id);
                return ServiceResult<ConsumableDocument>.SuccessResult(consumable.Data);
            }
            catch (Exception ex)
            {
                return ServiceResult<ConsumableDocument>.FailureResult(ex.Message);
            }
        }

        public async Task<ServiceResult<ConsumableDocument>> SubmitConsumable(Consumable consumable)
        {
            try
            {
                var document = ToConsumableDocument(consumable);
                var result = await _consumableRepository.SubmitConsumable(document);

                if (!result.Success)
                {
                    return ServiceResult<ConsumableDocument>.FailureResult($"Consumable Service Failure: {result.ErrorMessage}");
                }

                return ServiceResult<ConsumableDocument>.SuccessResult(null);
            }
            catch (Exception ex)
            {
                return ServiceResult<ConsumableDocument>.FailureResult(ex.Message);
            }
        }

        private ConsumableDocument ToConsumableDocument(Consumable consumable)
        {
            
            var doc = new ConsumableDocument
            {
                Name = consumable.Name,
                Ingredients = consumable.Ingredients,
                IsHealthyOption = consumable.IsHealthyOption,
                DateAdded = DateTime.UtcNow.Date,
                Rating = consumable.Rating,
                Cost = consumable.Cost,
                Speed = consumable.Speed,
                Difficulty = consumable.Difficulty,
                Type = consumable.Type
            };

            return doc;
        }
    }
}

