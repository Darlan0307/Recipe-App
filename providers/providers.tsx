"use client";

import { RecipeProvider } from "@/contexts/recipe-provider";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <RecipeProvider>{children}</RecipeProvider>;
};

export default Providers;
