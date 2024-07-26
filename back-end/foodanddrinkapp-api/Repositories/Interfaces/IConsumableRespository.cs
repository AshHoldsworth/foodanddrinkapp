using FoodAndDrink.Documents;
using FoodAndDrink.Services.Responses;

namespace FoodAndDrink.Repositories.Interfaces
{
	public interface IConsumableRepository
	{
        public Task<RepositoryResponse<List<ConsumableDocument>>> GetConsumableList(string type);
        public Task<RepositoryResponse<ConsumableDocument>> GetConsumable(string type);
        public Task<RepositoryResponse<ConsumableDocument>> SubmitConsumable(ConsumableDocument document);

    }
}

