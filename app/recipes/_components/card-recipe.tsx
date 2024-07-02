import { TypeRecipe } from "@/app/@types/types-recipes";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  recipe: TypeRecipe;
};

const CardRecipe = ({ recipe }: CardProps) => {
  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="border p-3 shadow-md mb-4 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-58 relative transition-transform transform hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden cursor-pointer"
    >
      <Image
        src={recipe.urlImage}
        alt={recipe.name}
        sizes="(min-width: 768px) 500px, 100vw"
        fill
        priority
        className="object-cover "
      />
      <div className="absolute inset-x-0 bottom-0 p-2 text-white  bg-opacity-55 bg-black">
        <h2 className="text-lg font-semibold text-nowrap text-ellipsis max-w-36 text-center overflow-hidden">
          {recipe.name}
        </h2>
        <p className="text-xs text-white font-semibold">{recipe.cookTimer}</p>
      </div>
    </Link>
  );
};

export default CardRecipe;
