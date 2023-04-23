using Microsoft.AspNetCore.Mvc;
using foodanddrinkapp_backend.Models;

namespace foodanddrinkapp_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsumablesController : Controller
    { 
        [HttpGet]
        public string[] Index()
        {
            return new string[] { "Hello", "World" };
        }

        [HttpGet("food")]
        public Food[] GetFoodList()
        {
            var ingredientList = new List<Ingredient>
            {
                new Ingredient("Beef"),
                new Ingredient("Potato"),
                new Ingredient("Onion"),
                new Ingredient("Beef Stock")
            };

            var ingredientList1 = new List<Ingredient>
            {
                new Ingredient("Chicken"),
                new Ingredient("Bun"),
                new Ingredient("Cheese"),
                new Ingredient("Bacon")
            };

            Food[] foodList = new Food[]
            {
                new Food("Cottage Pie", 4, ingredientList),
                new Food("Chicken Burger", 4, ingredientList1)
            };

            return foodList;
        }

        [HttpGet("drink")]
        public string[] GetDrinkList()
        {
            return new string[] { "Drink", "List" };
        }
    }
}
