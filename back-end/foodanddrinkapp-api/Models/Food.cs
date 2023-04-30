namespace FoodAndDrink.Api.Models
{
    public class Food : Consumable
    {
        public string? type;

        public Food(string name, int rating, List<Ingredient> ingredients, bool isHealthyOption, int difficulty, int cost, int speed) :base(name, rating, ingredients, isHealthyOption, difficulty, cost, speed)
        {
            type = "food";
        }
    }
}
