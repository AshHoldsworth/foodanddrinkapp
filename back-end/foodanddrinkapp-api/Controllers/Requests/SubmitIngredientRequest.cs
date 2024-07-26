namespace FoodAndDrink.Controllers.Requests
{
	public class SubmitIngredientRequest
	{
        public string Name { get; set; }
        public string Type { get; set; }
        public bool IsHealthyOption { get; set; }
        public string Macro { get; set; }
    }
}

