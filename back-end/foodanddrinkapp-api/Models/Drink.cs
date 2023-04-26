namespace FoodAndDrink.Api.Models
{
    public class Drink : Consumable
    {
        public string type;

        public Drink(string name, int rating, List<Ingredient> ingredients, bool isHealthyOption) : base(name, rating, ingredients, isHealthyOption)
        {
            type = "drink";
        }
    }
}
