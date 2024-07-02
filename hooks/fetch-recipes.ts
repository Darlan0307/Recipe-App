"use server";

import { TypeRecipeResponse } from "../app/@types/types-recipes";

export const fetchRecipes = async (): Promise<TypeRecipeResponse> => {
  const baseUrl = process.env.BASE_URL;

  const response = await fetch(`${baseUrl}/getRecipeByFilters`);
  const dataResponse: TypeRecipeResponse = await response.json();
  return dataResponse;
};
