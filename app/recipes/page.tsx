import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { fetchRecipes } from "@/hooks/fetch-recipes";
import { TypeRecipe } from "../@types/types-recipes";
import ListButtons from "./_components/list-buttons";
import ListCards from "./_components/list-cards";
import Image from "next/image";
import ButtonPagination from "./_components/button-pagination";

const ITEMS_PER_PAGE = 10;

const Recipes = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const page = parseInt(searchParams.page as string) || 1;

  // Fetch recipes
  const { data } = await fetchRecipes();

  // Pagination logic
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const randomIndex = () => Math.floor(Math.random() * data.length);
  const randomRecipe = data[randomIndex()];

  return (
    <div>
      <Header />
      <div className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-5 lg:px-12">
          {/* Recipe Card */}
          <div className="flex flex-col justify-center items-center sm:items-end">
            <article className="border p-3 shadow-md mb-4 w-full max-w-[400px] aspect-square lg:max-w-none lg:aspect-video relative transition-transform transform hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden cursor-pointer">
              <Image
                src={randomRecipe.urlImage}
                alt={randomRecipe.name}
                sizes="(min-width: 768px) 500px, 100vw"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 text-white bg-opacity-55 bg-black">
                <h2 className="text-lg font-semibold text-center overflow-hidden text-ellipsis">
                  {randomRecipe.name}
                </h2>
                <p className="text-lg text-white font-semibold">
                  {randomRecipe.cookTimer}
                </p>
              </div>
            </article>
          </div>

          {/* Welcome Section */}
          <div className="flex flex-col justify-center items-center row-start-1 sm:row-start-auto sm:items-start p-5 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl lg:max-w-none lg:aspect-video">
            <p className=" text-orange-600 font-semibold mb-2 animate-bounce text-center sm:text-left  sm:text-lg">
              Do not lose this amazing recipe
            </p>
            <h1 className="text-xl font-bold mb-4 pt-4 border-t-2 border-orange-500 text-center sm:text-left sm:text-3xl">
              Recipes in Headlines
            </h1>
            <p className="text-gray-600 mb-4 text-center sm:text-left sm:text-lg">
              Welcome to the recipes page!
            </p>
            <button className="mt-2 px-6 py-3 border rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold hover:bg-gradient-to-l hover:from-orange-500 hover:to-orange-600 transition-colors">
              Access Now
            </button>
          </div>
        </div>

        {/* Categories */}
        <h1 className="text-xl text-center font-semibold mb-4 mt-10">
          Category
        </h1>
        <ListButtons />

        {/* Welcome Message */}
        <div className="flex justify-center mt-8 flex-col items-center px-4 py-2 gap-2 sm:flex-row sm:px-0">
          <Button variant="outline" size="icon">
            👤
          </Button>
          <p className="text-lg text-center sm:text-left">
            Hi, User! Welcome to our incredible world of flavors. 😍 Enjoy! 🎉
          </p>
        </div>

        <div className="mt-6">
          <ListCards dataRecipes={data} />
        </div>

        <ButtonPagination currentPage={page} totalPages={totalPages} />

        {/* Chat and Notes Buttons */}
        <div className="text-center mt-8 flex items-center  justify-center space-x-4">
          <Button>Chat...</Button>
          <Button>Notes</Button>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
