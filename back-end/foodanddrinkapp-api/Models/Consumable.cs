namespace FoodAndDrink.Api.Models
{
    public class Consumable
    {
        public string Name { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public int Rating { get; set; }
        public bool IsHealthyOption { get; set; }
        public int Difficulty { get; set; }
        public int Cost { get; set; }
        public int Speed { get; set; }
    }
}
