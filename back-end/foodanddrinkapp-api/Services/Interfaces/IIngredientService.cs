﻿using System;
using FoodAndDrink.Api.Models;
using FoodAndDrink.Documents;

namespace FoodAndDrink.Services.Interfaces
{
	public interface IIngredientService
	{
        public Task<ServiceResult<List<IngredientDocument>>> GetIngredientList();
        public Task<ServiceResult<IngredientDocument>> GetIngredient(string id);
        public Task<ServiceResult<List<IngredientDocument>>> GetIngredientSelection(string[] ids);
        public Task<ServiceResult<IngredientDocument>> SubmitIngredient(Ingredient ingredient);
    }
}

