using System;
using foodanddrinkapp_api.Models;

namespace foodanddrinkapp_api
{
	public class MockData
	{
        private static List<Ingredient> ingredientList = new List<Ingredient>
            {
                new Ingredient("Beef"),
                new Ingredient("Potato"),
                new Ingredient("Onion"),
                new Ingredient("Beef Stock")
            };

        private static List<Ingredient> ingredientList1 = new List<Ingredient>
            {
                new Ingredient("Chicken"),
                new Ingredient("Bun"),
                new Ingredient("Cheese"),
                new Ingredient("Bacon")
            };

        private static Food[] foodList = new Food[]
            {
                new Food("Cottage Pie", 3, ingredientList, false),
                new Food("Chicken Burger", 4, ingredientList1, true),
                new Food("Beef Burger", 2, ingredientList, true),
                new Food("Rocket Salad", 3, ingredientList1, true),
                new Food("Sausage Pasta", 5, ingredientList, false),
                new Food("Chicken & Sweet Pepper Pasta", 5, ingredientList1, false),
                new Food("Lasagna", 3, ingredientList, false),
                new Food("Cous Cous & Roasted Vegetables", 4, ingredientList1, true),
                new Food("Spaghetti Bolognese", 3, ingredientList, true),
                new Food("BBQ Chicken & Chips", 5, ingredientList1, true),
                new Food("Slow Cooker Gammon", 5, ingredientList, false),
                new Food("Lamb Steaks", 4, ingredientList1, true)
            };

        public static Food[] getFoodList()
        {
            return foodList;
        }
	}
}

