"use server";

import { TypeRecipeResponse } from "../app/@types/types-recipes";

export const fetchRecipes = async () => {
  const response = await fetch(
    "https://recipe-app-backend-afxq.onrender.com/getRecipeByFilters"
  );
  const dataResponse = await response.json();
  return dataResponse;
};
