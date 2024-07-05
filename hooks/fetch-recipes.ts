"use server";

import { TypeRecipeResponse } from "../app/@types/types-recipes";

export interface FiltersRecipes {
  page: number;
  name: string;
  category: string;
  limit: string;
}

export const fetchRecipes = async ({
  category,
  limit,
  name,
  page,
}: FiltersRecipes): Promise<TypeRecipeResponse> => {
  const baseUrl = process.env.BASE_URL;
  // Buscar as 10 ultimas receitas
  const response = await fetch(
    `${baseUrl}/getRecipeByFilters?category=${category}&limit=${limit}&name=${name}&page=${page}`
  );
  const dataResponse: TypeRecipeResponse = await response.json();
  return dataResponse;
};
