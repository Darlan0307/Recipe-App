import { TypeRecipe } from "@/app/@types/types-recipes";
import CardRecipe from "./card-recipe";

type ListProps = {
  dataRecipes: TypeRecipe[];
};

const ListCards = ({ dataRecipes }: ListProps) => {
  return (
    <div className="flex flex-wrap gap-3 md:gap-x-10 md:gap-y-3 justify-center max-w-[1100px] mx-auto">
      {dataRecipes.map((recipe) => (
        <CardRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default ListCards;
