namespace FoodAndDrink.Api.Models
{
    public class Drink : Consumable
    {
        public string type;

        public Drink(int id, string name, int rating, List<Ingredient> ingredients, bool isHealthyOption, int difficulty, int cost, int speed) : base(id, name, rating, ingredients, isHealthyOption, difficulty, cost, speed)
        {
            type = "drink";
        }
    }
}
