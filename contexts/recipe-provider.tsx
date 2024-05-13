"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextValues {
  dataRecipes: any[];
}

export const RecipeContext = createContext({} as ContextValues);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [dataRecipes, setDataRecipes] = useState<any[]>([]);

  const FetchRecipesRandom = async () => {
    try {
      // for (let i = 0; i < 100; i++) {
      //   const response = await fetch(
      //     "https://www.themealdb.com/api/json/v1/1/random.php"
      //   );
      //   const data = await response.json();
      //   setDataRecipes((prevState) => [...prevState, data]);
      // }
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchRecipesRandom();
  }, []);

  const values = {
    dataRecipes,
  };

  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
