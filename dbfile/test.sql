select Drinks.drinkName as drinkName from Drinks, Ingredients, Recipe 
where Drinks.drinkID = Recipe.drinkID and Ingredients.ingredientID = Recipe.ingredientID and Ingredients.ingredientID =1 and Drinks.ingredientNumber =2;