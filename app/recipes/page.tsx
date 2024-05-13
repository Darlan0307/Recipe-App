"use client";

import Header from "@/components/header";
import { FetchRecipesRandom } from "./_actions/fetch-recipes";
import { useEffect, useState } from "react";
import { RecipeType } from "../@types/RecipeType";

const Recipes = () => {
  const [data, setData] = useState<RecipeType[]>([]);

  const FetchData = async () => {
    const response = await FetchRecipesRandom();

    setData(response);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <Header />
      <p>page recipes</p>
      {data &&
        data.map((recipe) => <p key={crypto.randomUUID()}>{recipe.strArea}</p>)}
    </div>
  );
};

export default Recipes;
