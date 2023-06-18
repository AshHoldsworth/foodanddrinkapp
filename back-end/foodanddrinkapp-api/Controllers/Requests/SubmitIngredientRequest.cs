using System;
using FoodAndDrink.Api.Models;

namespace FoodAndDrink.Controllers.Requests
{
	public class SubmitIngredientRequest
	{
        public string Name { get; set; }
        public string Type { get; set; }
    }
}

