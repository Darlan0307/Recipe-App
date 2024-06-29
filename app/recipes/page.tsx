import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { fetchRecipes } from "@/hooks/fetch-recipes";
import { TypeRecipe } from "../@types/types-recipes";
import ListButtons from "./_components/list-buttons";
import CardRecipe from "./_components/card-recipe";
import ListCards from "./_components/list-cards";
import Image from "next/image";

async function Recipes() {
  const recipes = await fetchRecipes();

  function randomIndex() {
    return Math.floor(Math.random() * recipes.data.length);
  }

  let randomRecipe1: TypeRecipe = await recipes.data[randomIndex()];

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center items-center sm:items-end">
            <article className="border p-3 shadow-md mb-4 w-full max-w-[400px] aspect-square relative transition-transform transform hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src={randomRecipe1.urlImage}
                alt={randomRecipe1.name}
                sizes="(min-width: 768px) 500px, 100vw"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 text-white  bg-opacity-55 bg-black">
                <h2 className="text-lg font-semibold text-nowrap text-ellipsis max-w-36 text-center overflow-hidden">
                  {randomRecipe1.name}
                </h2>
                <p className="text-xs text-white font-semibold">
                  {randomRecipe1.cookTimer}
                </p>
              </div>
            </article>
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-lg text-orange-600 font-semibold mb-2 animate-bounce">
              Do not lose this amazing recipe
            </p>
            <h1 className="text-3xl font-bold mb-4 border-t-2 border-orange-500 pt-2">
              Recipes in Headlines
            </h1>
            <p className="text-gray-600 mb-4">Welcome to the recipes page!</p>
            <button className="mt-2 px-6 py-3 border rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold hover:bg-gradient-to-l hover:from-orange-500 hover:to-orange-600 transition-colors">
              Access Now
            </button>
          </div>
        </div>

        {/* Categories */}
        <h1 className="text-xl text-center font-semibold mb-4 mt-4">
          Category
        </h1>
        <ListButtons />

        {/* Welcome */}
        <div className="flex items-center justify-center mt-8 space-x-4">
          <div className="inline-block bg-gray-200 p-2 rounded-full">👤</div>
          <p className="text-lg">
            Hi, User! Welcome to our incredible world of flavors. 😍 Enjoy! 🎉
          </p>
        </div>

        <div className="mt-6">
          <ListCards dataRecipes={recipes.data} />
        </div>

        {/* Chat and Notes Button */}
        <div className="text-center mt-8 flex flex-col sm:flex-row justify-center space-x-4">
          <Button>Chat...</Button>
          <Button>Notes</Button>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
