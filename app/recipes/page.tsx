// pages/Recipes.tsx
import React from 'react';
import Header from '@/components/Header';
import LoadingRecipesList from '../../components/LoadingRecipes';

function Recipes() {
  return (
    <div>
      <Header />
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Recipes</h1>
        <p className="text-gray-600">Welcome to the recipes page!</p>
      </div>
      <div className="container mx-auto mt-8">
        <LoadingRecipesList />
      </div>
    </div>
  );
}

export default Recipes;
