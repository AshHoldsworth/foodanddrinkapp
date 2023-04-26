using FluentMigrator;

namespace FoodAndDrink.Database.Migrations
{
    [Migration(202304232258)]
    public class _202304232258_InitialSeedData : Migration
    {
        public override void Up()
        {
            Execute.Script("../../../Scripts/SeedConsumables.sql");
            Execute.Script("../../../Scripts/SeedIngredients.sql");
            Execute.Script("../../../Scripts/SeedConsumableIngredients.sql");
        }

        public override void Down()
        {
            Delete.FromTable("Consumables").AllRows();
            Delete.FromTable("Ingredients").AllRows();
            Delete.FromTable("ConsumableIngredients").AllRows();
        }
    }
}
