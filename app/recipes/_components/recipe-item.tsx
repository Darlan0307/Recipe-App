import { RecipeType } from "@/app/@types/RecipeType";
import Image from "next/image";

interface RecipeItemProps {
  recipe: RecipeType;
}

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  return (
    <article className="w-fit">
      <Image
        src={recipe.strMealThumb || ""}
        alt={recipe.strMeal || ""}
        height={150}
        width={200}
        className="object-cover"
      />
      <h3 className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        {recipe.strMeal}
      </h3>
    </article>
  );
};

export default RecipeItem;
