using FoodAndDrink.Controllers.Requests;

namespace FoodAndDrink.Api.Models
{
    public class Consumable
    {
        public string Name { get; set; }
        public List<Ingredient>? Ingredients { get; set; }
        public int Rating { get; set; }
        public bool IsHealthyOption { get; set; }
        public int Cost { get; set; }
        public string Type { get; set; }
        public int? Difficulty { get; set; }
        public int? Speed { get; set; }
        public string? Course { get; set; }
        
        public static implicit operator Consumable(SubmitConsumableRequest req)
        {
            var consumable = new Consumable
            {
                Name = req.Name,
                Rating = req.Rating,
                IsHealthyOption = req.IsHealthyOption,
                Cost = req.Cost,
                Difficulty = req.Difficulty,
                Speed = req.Speed,
                Type = req.Type,
                Ingredients = req.Ingredients
            };
            
            if (req.Rating > 5) consumable.Rating = 5;
            else if (req.Rating < 1) consumable.Rating = 1;
            
            if (req.Cost > 3) consumable.Cost = 3;
            else if (req.Cost < 1) consumable.Cost = 1;
            
            if (req.Speed > 3) consumable.Speed = 3;
            else if (req.Speed < 1) consumable.Speed = 1;
            
            if (req.Difficulty > 3) consumable.Difficulty = 3;
            else if (req.Difficulty < 1) consumable.Difficulty = 1;

            return consumable;
        }
    }
}
