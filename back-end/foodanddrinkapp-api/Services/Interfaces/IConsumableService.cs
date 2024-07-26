using FoodAndDrink.Api.Models;
using FoodAndDrink.Documents;

namespace FoodAndDrink.Services.Interfaces
{
	public interface IConsumableService
	{
		public Task<ServiceResult<ConsumableDocument>> SubmitConsumable(Consumable consumable);
		public Task<ServiceResult<ConsumableDocument>> GetConsumable(string id);
        public Task<ServiceResult<List<ConsumableDocument>>> GetConsumableList(string type);
    }
}

