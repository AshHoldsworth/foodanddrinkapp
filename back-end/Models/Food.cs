namespace foodanddrinkapp_backend.Models
{
    public class Food : Consumable
    {
        public string? type;

        public Food(string name, int rating, List<Ingredient> ingredients) :base(name, rating, ingredients)
        {
            type = "food";
        }
    }
}
