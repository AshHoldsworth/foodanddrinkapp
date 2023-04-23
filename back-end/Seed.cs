using foodanddrinkapp_backend.Data;
using foodanddrinkapp_backend.Models;

namespace foodanddrinkapp_backend
{
    public class Seed
    {
        private readonly DataContext dataContext;

        public Seed(DataContext context)
        {
            dataContext = context;
        }

        public void SeedDataContext()
        {

            var consumableIngredientList = new List<ConsumableIngredient>()
            {
                new ConsumableIngredient()
                {
                    Consumable = new Food()
                    {
                        Name = "Chicken Burger",
                        Rating = 4,
                        ConsumableIngredients = new List<ConsumableIngredient>()
                        {
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Chicken"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Bun"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Cheese"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Bacon"}}
                        }
                    }
                },
                new ConsumableIngredient()
                {
                    Consumable = new Food()
                    {
                        Name = "Beef Burger",
                        Rating = 3,
                        ConsumableIngredients = new List<ConsumableIngredient>()
                        {
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Beef"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Bun"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Cheese"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Bacon"}}
                        }
                    }
                },
                new ConsumableIngredient()
                {
                    Consumable = new Drink()
                    {
                        Name = "Gin & Tonic",
                        Rating = 3,
                        ConsumableIngredients = new List<ConsumableIngredient>()
                        {
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Gin"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Tonic Water"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Chee"}},
                            new ConsumableIngredient {Ingredient = new Ingredient() {Name = "Bacon"}}
                        }
                    }
                }
            };

            dataContext.ConsumableIngredients.AddRange(consumableIngredientList);
            dataContext.SaveChanges();
        }
    }
}

