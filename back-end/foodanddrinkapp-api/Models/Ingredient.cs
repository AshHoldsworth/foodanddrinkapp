﻿namespace FoodAndDrink.Api.Models
{
    public class Ingredient
    {
        public string Name { get; set; }

        public Ingredient(string name)
        {
            Name = name;
        }
    }
}
