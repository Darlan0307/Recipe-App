import { TypeRecipe } from "@/app/@types/types-recipes";
import CardRecipe from "./card-recipe";

type ListProps = {
  dataRecipes: TypeRecipe[];
};

const ListCards = ({ dataRecipes }: ListProps) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center max-w-[1200px]">
      {dataRecipes.map((recipe) => (
        <CardRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default ListCards;
