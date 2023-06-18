using System;
using FoodAndDrink.Api.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FoodAndDrink.Documents
{
	public class ConsumableDocument
	{
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public List<string> Ingredients { get; set; }
        public int Rating { get; set; }
        public bool IsHealthyOption { get; set; }
        public int Difficulty { get; set; }
        public int Cost { get; set; }
        public int Speed { get; set; }
        public DateTime DateAdded { get; set; }
        public string Type { get; set; }
    }
}

