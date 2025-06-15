using FoodAndDrink.Controllers.Requests;

namespace FoodAndDrink.Api.Models
{
    public class Ingredient
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public bool IsHealthyOption { get; set; }
        public string? Macro { get; set; }

        public Ingredient(string name, string type, bool isHealthyOption, string? macro)
        {
            Name = name;
            Type = type;
            IsHealthyOption = isHealthyOption;
            Macro = macro;
        }

        public static implicit operator Ingredient(SubmitIngredientRequest req)
        {
            return new Ingredient(req.Name, req.Type, req.IsHealthyOption, req.Macro);
        }
    }
}
