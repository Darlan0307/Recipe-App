"use client";
import Header from "@/components/header";
import useFetchRecipes from "@/hooks/useFetchRecipes";
import RecipeList from "./_components/recipe-list";

const Recipes = () => {
  const data = useFetchRecipes();
  return (
    <div>
      <Header />
      <p>page recipes</p>
      <RecipeList data={data} />
    </div>
  );
};

export default Recipes;
