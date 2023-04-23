using foodanddrinkapp_backend.Models.Interfaces;

namespace foodanddrinkapp_backend.Models
{
    public class Ingredient : IDatabaseItem
    {
        public static int CurrentId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<ConsumableIngredient> ConsumableIngredients { get; set; }

        public Ingredient() { }

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
