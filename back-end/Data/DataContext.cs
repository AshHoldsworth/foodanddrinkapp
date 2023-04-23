using foodanddrinkapp_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace foodanddrinkapp_backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Consumable> Consumables { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<ConsumableIngredient> ConsumableIngredients { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ConsumableIngredient>()
                .HasKey(ic => new { ic.ConsumableId, ic.IngredientId });
            modelBuilder.Entity<ConsumableIngredient>()
                .HasOne(c => c.Consumable)
                .WithMany(ic => ic.ConsumableIngredients)
                .HasForeignKey(c => c.ConsumableId);
            modelBuilder.Entity<ConsumableIngredient>()
                .HasOne(i => i.Ingredient)
                .WithMany(ic => ic.ConsumableIngredients)
                .HasForeignKey(i => i.IngredientId);
        }
    }
}