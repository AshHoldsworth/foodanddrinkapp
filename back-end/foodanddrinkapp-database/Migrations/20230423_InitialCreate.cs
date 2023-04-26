using FluentMigrator;

namespace foodanddrinkapp_database.Migrations
{
    [Migration(20230423)]
    public class _20230423_InitialCreate : Migration
    {
        public override void Up()
        {
            Create.Table("Consumables")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString().NotNullable()
                .WithColumn("Rating").AsInt32().NotNullable()
                .WithColumn("IsHealthyOption").AsBoolean().NotNullable()
                .WithColumn("DateAdded").AsDateTime().NotNullable()
                .WithColumn("Ingredients").AsString().NotNullable();

            Create.Table("Ingredients")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString().NotNullable();
        }

        public override void Down()
        {
            Delete.Table("Consumables");
            Delete.Table("Ingredients");
        }
    }
}
