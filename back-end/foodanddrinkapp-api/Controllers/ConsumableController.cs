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
            var result = await _consumableService.GetConsumableList(type);

            if(result.Success == false)
            {
                return BadRequest(result.ErrorMessage);
            }
 
            return Ok(result.Data);
        }

        [HttpGet]
        [Route("/consumable/{id}")]
        public async Task<IActionResult> GetConsumable(string id)
        {
            var result = await _consumableService.GetConsumable(id);

            if (result.Success == false)
            {
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
                return BadRequest(consumableResult.Result.ErrorMessage);
            }

            return Ok();
        }
    }
}
