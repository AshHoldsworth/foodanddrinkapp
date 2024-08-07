﻿using Microsoft.AspNetCore.Mvc;
using FoodAndDrink.Services.Interfaces;
using FoodAndDrink.Controllers.Requests;

namespace FoodAndDrink.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IngredientController : Controller
    {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }

        [HttpGet]
        [Route("/ingredients")]
        public async Task<IActionResult> GetIngredientList()
        {
            var result = await _ingredientService.GetIngredientList();

            if(result.Success == false)
            {
                Console.WriteLine(result.ErrorMessage);
                return BadRequest(result.ErrorMessage);
            }

            return Ok(result.Data);
        }

        [HttpGet]
        [Route("/ingredient/{id}")]
        public async Task<IActionResult> GetIngredient(string id)
        {
            var result = await _ingredientService.GetIngredient(id);

            if (result.Success == false)
            {
                Console.WriteLine(result.ErrorMessage);
                return BadRequest(result.ErrorMessage);
            }

            return Ok(result.Data);
        }

        [HttpPost]
        public async Task<IActionResult> SubmitConsumable([FromBody] SubmitIngredientRequest request)
        {
            var result = await _ingredientService.SubmitIngredient(request);

            if (result.Success == false)
            {
                Console.WriteLine(result.ErrorMessage);
                return BadRequest(result.ErrorMessage);
            }

            return Ok();
        }
    }
}
