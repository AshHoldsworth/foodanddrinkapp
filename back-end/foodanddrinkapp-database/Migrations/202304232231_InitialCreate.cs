using FluentMigrator;

namespace FoodAndDrink.Database.Migrations
{
    [Migration(202304232231)]
    public class _202304232231_InitialCreate : Migration
    {
        public override void Up()
        {
            Create.Table("Consumables")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString().NotNullable()
                .WithColumn("Rating").AsInt32().NotNullable()
                .WithColumn("IsHealthyOption").AsBoolean().NotNullable()
                .WithColumn("DateAdded").AsDateTime().NotNullable();

            Create.Table("Ingredients")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString().NotNullable();

            Create.Table("ConsumableIngredients")
                .WithColumn("ConsumableId").AsInt32().NotNullable()
                .WithColumn("IngredientId").AsInt32().NotNullable();

            Create.ForeignKey()
                .FromTable("ConsumableIngredients").ForeignColumn("ConsumableId")
                .ToTable("Consumables").PrimaryColumn("Id");

            Create.ForeignKey()
                .FromTable("ConsumableIngredients").ForeignColumn("IngredientId")
                .ToTable("Ingredients").PrimaryColumn("Id");
        }

        public override void Down()
        {
            Delete.Table("Consumables");
            Delete.Table("Ingredients");
            Delete.Table("ConsumableIngredients");
        }
    }
}
