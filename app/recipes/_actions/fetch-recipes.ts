import { RecipeType } from "@/app/@types/RecipeType";

export const FetchRecipesRandom = async (): Promise<RecipeType[]> => {
  const fetchedRecipes: RecipeType[] = [];
  for (let i = 0; i < 10; i++) {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const dataRecipe = (await data.meals[0]) as RecipeType;
    fetchedRecipes.push(dataRecipe);
  }
  return fetchedRecipes;
};
