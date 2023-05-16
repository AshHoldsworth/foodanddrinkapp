using Microsoft.AspNetCore.Mvc;
using FoodAndDrink.Api.Models;

namespace FoodAndDrink.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsumableController : Controller
    {
        [HttpGet]
        public string[] Index()
        {
            return new string[] { "Hello", "World" };
        }

        [HttpGet("food")]
        public Food[] GetFoodList()
        {
            return MockData.GetFoodList();
        }

        [HttpGet("food/item/{consumableId}")]
        public ActionResult<Food> GetFoodItem(int consumableId)
        {
            return MockData.GetFoodItem(consumableId);
        }

        [HttpGet("drink")]
        public string[] GetDrinkList()
        {
            return new string[] { "Drink", "List" };
        }
    }
}
