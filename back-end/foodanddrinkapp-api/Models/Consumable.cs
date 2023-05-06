using FoodAndDrink.Api.Models.Interfaces;

namespace FoodAndDrink.Api.Models
{
    public class Consumable : IDatabaseItem
    {
        public static int CurrentId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public int Rating { get; set; }
        public bool IsHealthyOption { get; set; }
        public int Difficulty { get; set; }
        public int Cost { get; set; }
        public int Speed { get; set; }

        public Consumable(int id, string name, int rating, List<Ingredient> ingredients, bool isHealthyOption, int difficulty, int cost, int speed)
        {
            Id = id;
            Name = name;
            Rating = rating;
            Ingredients = ingredients;
            IsHealthyOption = isHealthyOption;
            Difficulty = difficulty;
            Cost = cost;
            Speed = speed;
        }
    }
}
