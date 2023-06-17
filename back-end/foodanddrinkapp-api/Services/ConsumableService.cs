using System;
using FoodAndDrink.Documents;
using FoodAndDrink.Services;
using FoodAndDrink.Services.Interfaces;

namespace FoodAndDrink
{
	public class ConsumableService : IConsumableService
	{
		public ConsumableService()
		{
		}

        public Task<ServiceResult<ConsumableDocument>> GetConsumable()
        {
            throw new NotImplementedException();
        }

        public Task<ServiceResult<ConsumableDocument>> SubmitConsumable(ConsumableDocument document)
        {
            throw new NotImplementedException();
        }
    }
}

