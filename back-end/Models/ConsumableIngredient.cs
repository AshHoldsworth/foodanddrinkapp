namespace foodanddrinkapp_backend.Models
{
    public class ConsumableIngredient
    {
        public int ConsumableId { get; set; }
        public virtual Consumable Consumable { get; set; }

        public int IngredientId { get; set; }
        public virtual Ingredient Ingredient { get; set; }
    }
}
