PRINT 'Seeding [dbo].Ingredients...';

SET IDENTITY_INSERT [dbo].[Ingredients] ON

INSERT INTO [dbo].Ingredients (Id, Name)
VALUES
	(1, 'Beef Burger'),
	(2, 'Bun'),
	(3, 'Chicken'),
	(4, 'Bacon'),
	(5, 'Cheese'),
	(6, 'Sweet Peppers'),
	(7, 'Sausage'),
	(8, 'Pasta'),
	(9, 'Potato'),
	(10, 'Onion'),
	(11, 'Pepper'),
	(12, 'Beef');

SET IDENTITY_INSERT [dbo].[Ingredients] OFF