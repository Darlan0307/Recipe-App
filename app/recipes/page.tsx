import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Jantar from "@/public/jantar.jpg";
import Jantar2 from "@/public/jantar2.jpg";
import Pancakes from "@/public/pancakes.jpeg";
import { FaHome, FaUser, FaBriefcase, FaChild, FaUtensils, FaCandyCane } from 'react-icons/fa';

function Recipes() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ marginLeft: '-1005px' }}>
          {/* Left Column */}
          <div className="flex flex-col justify-center items-center sm:items-end">
            <div className="border p-3 rounded-full shadow-md mb-4 w-40 h-40 relative transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image
                src={Jantar}
                alt="Jantar"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 text-white bg-black bg-opacity-50 rounded-b-full">
                <h2 className="text-md font-semibold">Grilled Chicken</h2>
                <p className="text-xs text-white">Preparation: 30 minutes</p>
              </div>
            </div>
            <div className="border p-3 rounded-full shadow-md w-40 h-40 relative transition-transform transform hover:scale-105 hover:shadow-xl">
              <Image
                src={Jantar2}
                alt="Jantar2"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 text-white bg-black bg-opacity-50 rounded-b-full">
                <h2 className="text-md font-semibold">Onion Rings</h2>
                <p className="text-xs text-white">Preparation: 30 minutes</p>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="flex flex-col justify-center items-center sm:items-start p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
            <p className="text-lg text-orange-600 font-semibold mb-2 animate-bounce">Do not lose this amazing recipe</p>
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
        <h1 className="text-xl text-center font-semibold mb-4 mt-4">Category</h1>
        <div className="flex flex-wrap justify-center space-x-10 ">

          <button className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center">
            <span>All</span>
            <span className="mt-1 transition-transform transform group-hover:translate-y-0">
              <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/epietrpn.json" trigger="hover" style="width:70px;height:20px"></lord-icon>`, }}></div>
            </span>
          </button>

          <button className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center">
            <span>Chef</span>
            <span className="mt-1 transition-transform transform group-hover:translate-y-0">
              <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/rztizmkk.json" trigger="hover" style="width:70px;height:20px"></lord-icon>`, }}></div>
            </span>
          </button>

          <button className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center">
            <span>Kids</span>
            <span className="mt-1 transition-transform transform group-hover:translate-y-0">
              <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/juvsezvc.json" trigger="hover" style="width:70px;height:20px"></lord-icon>`, }}></div>
            </span>
          </button>

          <button className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center">
            <span>Meat</span>
            <span className="mt-1 transition-transform transform group-hover:translate-y-0">
              <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/knfxypdv.json" trigger="hover" style="width:70px;height:20px"></lord-icon>`, }}></div>
            </span>
          </button>
          <button className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center">
            <span>Salad</span>
            <span className="mt-1 transition-transform transform group-hover:translate-y-0">
              <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/evvwiruv.json" trigger="hover" style="width:70px;height:20px"></lord-icon>`, }}></div>
            </span>
          </button>
          <button className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center">
            <span>Desserts</span>
            <span className="mt-1 transition-transform transform group-hover:translate-y-0">
              <div dangerouslySetInnerHTML={{ __html: `<lord-icon src="https://cdn.lordicon.com/joucdxcj.json" trigger="hover" style="width:70px;height:20px"></lord-icon>`, }}></div>
            </span>
          </button>
        </div>

        {/* Welcome */}
        <div className="flex items-center justify-center mt-8 space-x-4">
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
                width={80}
                height={80}
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
          <h3 className="text-xl text-center font-semibold mb-4">More Search</h3>
          <div className="flex justify-center mt-4">
            <div className="flex items-center border p-3 rounded-lg shadow-md max-w-xs w-full">
              <Image
                src={Pancakes}
                alt="Pancakes"
                width={80}
                height={80}
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
