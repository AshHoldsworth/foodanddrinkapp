using System;
using foodanddrinkapp_backend.Models;

namespace foodanddrinkapp_backend
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
                new Food("Cottage Pie", 4, ingredientList),
                new Food("Chicken Burger", 4, ingredientList1)
            };

        public static Food[] getFoodList()
        {
            return foodList;
        }
	}
}

