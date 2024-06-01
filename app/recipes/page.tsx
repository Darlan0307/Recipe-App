import React from "react";
import Header from "@/components/Header";
import LoadingRecipesList from "../../components/LoadingRecipes";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Jantar from "@/public/jantar.jpg";
import Jantar2 from "@/public/jantar2.jpg";
import Pancakes from "@/public/pancakes.jpeg";

function Recipes() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 px-4">
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Left Column */}
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <div className="flex items-center border p-3 rounded-lg shadow-md mb-4 max-w-xs w-full">
              <Image
                src={Jantar}
                alt="Jantar"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
              <div className="ml-3">
                <h2 className="text-lg font-semibold">Pancakes1</h2>
                <p className="text-sm text-gray-600">Preparation: 30 minutes</p>
              </div>
            </div>
            <div className="flex items-center border p-3 rounded-lg shadow-md max-w-xs w-full">
              <Image
                src={Jantar2}
                alt="Jantar2"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
              <div className="ml-3">
                <h2 className="text-lg font-semibold">Pancake2</h2>
                <p className="text-sm text-gray-600">Preparation: 30 minutes</p>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col items-center w-full sm:w-1/2 text-center">
            <p className="text-lg">Do not lose this amazing recipe</p>
            <h1 className="text-3xl font-bold mb-4 border-t-2">
              Recipes in Headlines
            </h1>
            <p className="text-gray-600">Welcome to the recipes page!</p>
            <button className="mt-2 px-4 py-2 border rounded-full bg-orange-500 text-white hover:bg-orange-600">
              Access Now
            </button>
          </div>
        </div>

        {/* Categories */}
        <h1 className="text-xl text-center font-semibold mb-4 mt-8">
          Category
        </h1>
        <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
          <Button>ALL</Button>
          <Button>CHEF</Button>
          <Button>KIDS</Button>
          <Button>MEAT</Button>
          <Button>SALAD</Button>
          <Button>DOCES</Button>
        </div>

        {/* Welcome */}
        <div className="text-center mt-8 flex flex-col items-center space-y-4">
          <div className="inline-block bg-gray-200 p-2 rounded-full">👤</div>
          <p className="text-lg">
            Hi, User! Welcome to our incredible world of flavors. 😍 Enjoy! 🎉
          </p>
        </div>

        {/* Special */}
        <div className="mt-8">
          <h3 className="text-xl text-center font-semibold mb-4">Special</h3>
          <div className="flex justify-center mt-4">
            <div className="flex items-center border p-3 rounded-lg shadow-md max-w-xs w-full">
              <Image
                src={Pancakes}
                alt="Pancakes"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
              <div className="ml-3">
                <h2 className="text-lg font-semibold">Pancakes</h2>
                <p className="text-sm text-gray-600">Preparation: 30 minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* More Search */}
        <div className="mt-8">
          <h3 className="text-xl text-center font-semibold mb-4">
            More Search
          </h3>
          <div className="flex justify-center mt-4">
            <div className="flex items-center border p-3 rounded-lg shadow-md max-w-xs w-full">
              <Image
                src={Pancakes}
                alt="Pancakes"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-24 sm:h-24"
              />
              <div className="ml-3">
                <h2 className="text-lg font-semibold">Pancakes</h2>
                <p className="text-sm text-gray-600">Preparation: 30 minutes</p>
              </div>
            </div>
          </div>
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
