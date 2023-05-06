namespace FoodAndDrink.Api.Models
{
    public class Food : Consumable
    {
        public string? type;

        public Food(int id, string name, int rating, List<Ingredient> ingredients, bool isHealthyOption, int difficulty, int cost, int speed) :base(id, name, rating, ingredients, isHealthyOption, difficulty, cost, speed)
        {
            type = "food";
        }
    }
}
