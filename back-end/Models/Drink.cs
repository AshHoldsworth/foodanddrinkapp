namespace foodanddrinkapp_backend.Models
{
    public class Drink : Consumable
    {
        public string type;

        public Drink(string name, int rating, List<Ingredient> ingredients) : base(name, rating, ingredients)
        {
            type = "drink";
        }
    }
}
