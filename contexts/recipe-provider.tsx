"use client";

import { RecipeType } from "@/app/@types/RecipeType";
import { ReactNode, createContext, useContext, useState } from "react";

interface ContextValues {
  recipesFavorites: RecipeType[];
}

export const RecipeContext = createContext({} as ContextValues);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipesFavorites, setRecipesFavorites] = useState<RecipeType[]>([]);

  // Função para adicionar nos favoritos

  // Função para remover dos favoritos

  const values = {
    recipesFavorites,
  };

  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
