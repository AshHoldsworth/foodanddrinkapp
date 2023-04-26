using FoodAndDrink.Api.Models.Interfaces;

namespace FoodAndDrink.Api.Models
{
    public class Ingredient : IDatabaseItem
    {
        public static int CurrentId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }

        public Ingredient(string name)
        {
            Id = SetNewId();
            Name = name;
        }

        public int SetNewId()
        {
            return ++CurrentId;
        }
    }
}
