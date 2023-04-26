using Microsoft.AspNetCore.Mvc;
using foodanddrinkapp_api.Models;

namespace foodanddrinkapp_api.Controllers
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
            return MockData.getFoodList();
        }

        [HttpGet("drink")]
        public string[] GetDrinkList()
        {
            return new string[] { "Drink", "List" };
        }
    }
}
