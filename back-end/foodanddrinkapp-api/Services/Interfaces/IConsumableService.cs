using System;
using FoodAndDrink.Documents;

namespace FoodAndDrink.Services.Interfaces
{
	public interface IConsumableService
	{
		public Task<ServiceResult<ConsumableDocument>> SubmitConsumable(ConsumableDocument document);
		public Task<ServiceResult<ConsumableDocument>> GetConsumable();
	}
}

