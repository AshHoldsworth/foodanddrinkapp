using System;
using FoodAndDrink.Api.Models;
using FoodAndDrink.Documents;
using FoodAndDrink.Repositories.Interfaces;
using FoodAndDrink.Services;
using FoodAndDrink.Services.Interfaces;
using FoodAndDrink.Services.Responses;

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
                RepositoryResponse<ConsumableDocument> result = await _consumableRepository.SubmitConsumable(document);

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
            return new ConsumableDocument
            {
                Name = consumable.Name,
                Ingredients = consumable.Ingredients,
                Rating = consumable.Rating,
                IsHealthyOption = consumable.IsHealthyOption,
                Difficulty = consumable.Difficulty,
                Cost = consumable.Cost,
                Speed = consumable.Speed,
                DateAdded = DateTime.UtcNow,
                Type = consumable.Type
            };
        }
    }
}

