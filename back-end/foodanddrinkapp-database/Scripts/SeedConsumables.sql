PRINT 'Seeding [dbo].[Consumables]...';

SET IDENTITY_INSERT [dbo].[Consumables] ON

INSERT INTO [dbo].[Consumables] (Id, Name, Rating, IsHealthyOption, DateAdded)
VALUES
	(1, 'Beef Burger', 3, 1, '2023-04-26 22:31:00.000'),
	(2, 'Chicken Burger', 4, 1, '2023-04-26 22:32:00.000'),
	(3, 'Chicken & Sweet Pepper Pasta', 5, 0, '2023-04-26 22:33:00.000'),
	(4, 'Sausage Pasta', 5, 0, '2023-04-26 22:34:00.000'),
	(5, 'Cottage Pie', 2, 0, '2023-04-26 22:35:00.000');

SET IDENTITY_INSERT [dbo].[Consumables] OFF	