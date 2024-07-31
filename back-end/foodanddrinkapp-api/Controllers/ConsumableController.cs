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

        public ConsumableController(IConsumableService consumableService)
        {
            _consumableService = consumableService;
        }

        [HttpGet]
        [Route("/consumables/{type}")]
        public async Task<IActionResult> GetConsumableList(string type)
        {
            var result = await _consumableService.GetConsumableList(type);

            if (result.Success == false)
            {
                Console.WriteLine(result.ErrorMessage);
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
                Console.WriteLine(result.ErrorMessage);
                return BadRequest(result.ErrorMessage);
            }

            return Ok(result.Data);
        }

        [HttpPost]
        [Route("/consumable/add-new-consumable")]
        public async Task<IActionResult> SubmitConsumable([FromBody] SubmitConsumableRequest request)
        {
            var result = await _consumableService.SubmitConsumable(request);

            if (result.Success == false)
            {
                Console.WriteLine(result.ErrorMessage);
                return BadRequest(result.ErrorMessage);
            }

            return Ok();
        }
    }
}
