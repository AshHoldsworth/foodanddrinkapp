using FoodAndDrink.Api.Models;

namespace FoodAndDrink.Api
{
	public class Data
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

		public Food[] foodList = new Food[]
			{
				new Food(1, "Cottage Pie", 3, ingredientList, false, 2, 1, 2),
				new Food(2, "Chicken Burger", 4, ingredientList1, true, 1, 1, 1),
				new Food(3, "Beef Burger", 2, ingredientList, true, 1, 1, 1),
				new Food(4, "Rocket Salad", 3, ingredientList1, true, 1, 1, 1),
				new Food(5, "Sausage Pasta", 5, ingredientList, false, 2, 2, 2),
				new Food(6, "Chicken & Sweet Pepper Pasta", 5, ingredientList1, false, 2, 2, 1),
				new Food(7, "Lasagna", 3, ingredientList, false, 2, 2, 3),
				new Food(8, "Cous Cous & Roasted Vegetables", 4, ingredientList1, true, 2, 1, 2),
				new Food(9, "Spaghetti Bolognese", 3, ingredientList, true, 2, 1, 2),
				new Food(10, "BBQ Chicken & Chips", 5, ingredientList1, true, 2, 2, 2),
				new Food(11, "Slow Cooker Gammon", 5, ingredientList, false, 1, 2, 3),
				new Food(12, "Lamb Steaks", 4, ingredientList1, true, 2, 3, 1)
			};
	}

	public class MockData
	{
        public static Food[] GetFoodList()
        {
			Food[] foodList = new Data().foodList;
            return foodList;
        }

        public static Food GetFoodItem(int consumableId)
        {
			Food[] foodList = new Data().foodList;
			Food consumable = Array.Find(foodList, food => food.Id == consumableId);

            return consumable;
        }
    }
}

