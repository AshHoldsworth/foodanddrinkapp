﻿using System;
namespace FoodAndDrink.Configuration
{
	public class MongoDbConfig
	{
		public string? ConnectionString { get; set; }
		public string? Database { get; set; }
		public string? ConsumablesCollection { get; set; }
		public string? IngredientsCollection { get; set; }
	}
}

