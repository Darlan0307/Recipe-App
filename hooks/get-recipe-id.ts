"use server";

import { TypeRecipe } from "@/app/@types/types-recipes";

export const getRecipeId = async (id: string) => {
  let result: TypeRecipe | null = null,
    error = null;
  const baseUrl = process.env.BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/getRecipeById/${id}`);

    const data = await response.json();
    result = data.data as TypeRecipe;
  } catch (err) {
    error = err;
  }

  return { result, error };
};
