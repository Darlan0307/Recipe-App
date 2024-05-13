"use client";

import { useEffect, useState } from "react";
import { RecipeType } from "@/app/@types/RecipeType";
import { FetchRecipesRandom } from "@/app/recipes/_actions/fetch-recipes";

const useFetchRecipes = () => {
  const [data, setData] = useState<RecipeType[]>([]);

  const fetchData = async () => {
    const response = await FetchRecipesRandom();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};

export default useFetchRecipes;
