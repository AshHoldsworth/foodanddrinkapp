namespace FoodAndDrink.Controllers.Requests
{
	public class SubmitConsumableRequest
	{
        public string Name { get; set; }
        public int Rating { get; set; }
        public bool IsHealthyOption { get; set; }
        public int Cost { get; set; }
        public string Type { get; set; }
        public List<string>? Ingredients { get; set; }
        public int? Difficulty { get; set; }
        public int? Speed { get; set; }
        public bool newIngredients { get; set; }
    }
}

