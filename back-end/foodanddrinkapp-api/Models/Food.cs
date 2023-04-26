namespace FoodAndDrink.Api.Models
{
    public class Food : Consumable
    {
        public string? type;

        public Food(string name, int rating, List<Ingredient> ingredients, bool isHealthyOption) :base(name, rating, ingredients, isHealthyOption)
        {
            type = "food";
        }
    }
}
