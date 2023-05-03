using Microsoft.AspNetCore.Mvc;
using FoodAndDrink.Api.Models;
using System;

namespace FoodAndDrink.Api.Controllers
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
            return MockData.GetFoodList();
        }

        [HttpGet("food/item/{consumableId:int}")]
        public ActionResult<Food> GetFoodItem(int consumableId)
        {
            Console.Write($"ConsumableId: {consumableId}");
            return MockData.GetFoodItem(consumableId);
        }

        [HttpGet("drink")]
        public string[] GetDrinkList()
        {
            return new string[] { "Drink", "List" };
        }
    }
}
