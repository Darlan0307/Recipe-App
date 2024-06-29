import { TypeRecipe } from "@/app/@types/types-recipes";
import Image from "next/image";

type CardProps = {
  recipe: TypeRecipe;
};

const CardRecipe = ({ recipe }: CardProps) => {
  return (
    <div className="border p-3 rounded-full shadow-md mb-4 w-40 h-40 relative transition-transform transform hover:scale-105 hover:shadow-xl">
      <Image
        src={recipe.urlImage}
        alt={recipe.name}
        sizes="(min-width: 768px) 500px, 100vw"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 p-2 text-white bg-black bg-opacity-50 rounded-b-full">
        <h2 className="text-md font-semibold">{recipe.name}</h2>
        <p className="text-xs text-white">{recipe.cookTimer}</p>
      </div>
    </div>
  );
};

export default CardRecipe;
