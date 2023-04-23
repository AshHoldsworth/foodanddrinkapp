using foodanddrinkapp_backend.Models.Interfaces;

namespace foodanddrinkapp_backend.Models
{
    public class Consumable : IDatabaseItem
    {
        public static int CurrentId { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateAdded { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public virtual ICollection<ConsumableIngredient> ConsumableIngredients { get; set; }
        public int Rating {
            get { return Rating; }
            set { if (value > 5)
                {
                    Rating = 5;
                }
                else
                {
                    Rating = value;
                }
            }
        }

        public Consumable() { }

        public Consumable(string name, int rating, List<Ingredient> ingredients)
        {
            Name = name;
            Id = SetNewId();
            Rating = rating;
            DateAdded = DateTime.Now;
            Ingredients = ingredients;
        }

        public int SetNewId()
        {
            return ++CurrentId;
        }
    }
}
