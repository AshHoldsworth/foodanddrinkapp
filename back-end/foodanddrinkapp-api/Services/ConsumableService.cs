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
                DateAdded = DateTime.UtcNow.Date
            };
            
            if (consumable.Rating > 5) doc.Rating = 5;
            else if (consumable.Rating < 1) doc.Rating = 1;
            
            if (consumable.Cost > 3) doc.Cost = 3;
            else if (consumable.Cost < 1) doc.Cost = 1;
            
            if (consumable.Speed > 3) doc.Speed = 3;
            else if (consumable.Speed < 1) doc.Speed = 1;
            
            if (consumable.Difficulty > 3) doc.Difficulty = 3;
            else if (consumable.Difficulty < 1) doc.Difficulty = 1;

            return doc;
        }
    }
}

