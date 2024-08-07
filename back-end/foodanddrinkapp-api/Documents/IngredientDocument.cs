﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace FoodAndDrink.Documents
{
    public class IngredientDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public bool IsHealthyOption { get; set; }
        public string Macro { get; set; }
        public DateTime DateAdded { get; set; }
    }
}

