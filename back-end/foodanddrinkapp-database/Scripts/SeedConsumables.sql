PRINT 'Seeding [dbo].[Consumables]...';

SET IDENTITY_INSERT [dbo].[Consumables] ON

INSERT INTO [dbo].[Consumables] (Id, Name, Rating, IsHealthyOption, DateAdded)
VALUES
	(1, 'Beef Burger', 3, 1, 1, 1, 1),
	(2, 'Chicken Burger', 4, 1, 1, 1, 1),
	(3, 'Chicken & Sweet Pepper Pasta', 5, 0, 2, 2, 1),
	(4, 'Sausage Pasta', 5, 0, 2, 1, 2),
	(5, 'Cottage Pie', 2, 0, 2, 1, 2);

SET IDENTITY_INSERT [dbo].[Consumables] OFF	