export interface TypeRecipeResponse {
  data: TypeRecipe[];
  currentPage: number;
  limit: number;
  totalResults: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface TypeRecipe {
  id: string;
  name: string;
  urlImage: string;
  category: string;
  cookTimer: string;
  portion: string;
  ingredients: string[];
  instructions: string[];
}
