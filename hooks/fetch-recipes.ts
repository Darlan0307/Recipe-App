"use server";

import { TypeRecipeResponse } from "../app/@types/types-recipes";

export const fetchRecipes = async (): Promise<TypeRecipeResponse> => {
  const response = await fetch(
    "https://recipe-app-backend-afxq.onrender.com/getRecipeByFilters"
  );
  const dataResponse: TypeRecipeResponse = await response.json();
  return dataResponse;
};
