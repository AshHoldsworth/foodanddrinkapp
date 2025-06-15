using System.Net;
using FoodAndDrink.Api.Models;
using Microsoft.AspNetCore.Mvc;
using FoodAndDrink.Services.Interfaces;
using FoodAndDrink.Controllers.Requests;

namespace FoodAndDrink.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsumableController : Controller
    {
        private readonly IConsumableService _consumableService;
        private readonly IIngredientService _ingredientService;

        public ConsumableController(IConsumableService consumableService, IIngredientService ingredientService)
        {
            _consumableService = consumableService;
            _ingredientService = ingredientService;
        }

        [HttpGet]
        [Route("/consumables/{type}")]
        public async Task<IActionResult> GetConsumableList(string type)
        {

            return Ok(new List<Consumable>()
            {
                new Consumable()
                {
                    Name = "test",
                    Rating = 1,
                    IsHealthyOption = true,
                    Difficulty = 1,
                    Speed = 1,
                    Cost = 1,
                    Type = "test",
                    Ingredients = new List<Ingredient>()
                    {
                        new Ingredient("onion", "vegetable", true, null),
                        new Ingredient("bread", "carb", false, null),
                    }
                },
                new Consumable()
                {
                    Name = "test2",
                    Rating = 1,
                    IsHealthyOption = true,
                    Difficulty = 1,
                    Speed = 1,
                    Cost = 1,
                    Type = "test",
                    Ingredients = new List<Ingredient>()
                    {
                        new Ingredient("chicken", "poultry", true, "protein"),
                        new Ingredient("cheese", "dairy", false, "fat"),
                    }
                },
                new Consumable()
                {
                    Name = "test3",
                    Rating = 1,
                    IsHealthyOption = true,
                    Difficulty = 1,
                    Speed = 1,
                    Cost = 1,
                    Type = "test",
                    Ingredients = new List<Ingredient>()
                    {
                        new Ingredient("beef", "meat", true, "protein"),
                        new Ingredient("pepper", "vegetable", true, null),
                    }
                }
            });
            
            var result = await _consumableService.GetConsumableList(type);

            if (result.Success == false)
            {
                Console.WriteLine(result.ErrorMessage);
                return BadRequest(result.ErrorMessage);
            }
            
            if (result.Data?.Count == 0) return NoContent();
 
            return Ok(result.Data);
        }

        [HttpGet]
        [Route("/consumable/{id}")]
        public async Task<IActionResult> GetConsumable(string id)
        {
            var result = await _consumableService.GetConsumable(id);

            if (result.Success == false)
            {
                Console.WriteLine(result.ErrorMessage);
                return BadRequest(result.ErrorMessage);
            }

            return Ok(result.Data);
        }

        [HttpPost]
        public async Task<IActionResult> SubmitConsumable([FromBody] SubmitConsumableRequest request)
        {
            var consumableResult = _consumableService.SubmitConsumable(request);
            var ingredientResult = request.newIngredients ? _ingredientService.SubmitIngredients(request.Ingredients) : null;
            
            await Task.WhenAll(consumableResult, ingredientResult);

            if (consumableResult.Result.Success == false)
            {
                Console.WriteLine(consumableResult.Result.ErrorMessage);
                return BadRequest(consumableResult.Result.ErrorMessage);
            }

            return Ok();
        }
    }
}
