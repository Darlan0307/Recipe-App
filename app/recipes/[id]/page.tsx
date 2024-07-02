import Header from "@/components/Header";
import { getRecipeId } from "@/hooks/get-recipe-id";
import { Forklift, PlaneTakeoff, Soup, Timer } from "lucide-react";
import Image from "next/image";

interface RecipePageProps {
  params: {
    id: string;
  };
}

const RecipePage = async ({ params: { id } }: RecipePageProps) => {
  // Fetch recipe
  const { result, error } = await getRecipeId(id);

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center my-8 gap-8 md:grid md:grid-cols-2 md:gap-10 max-w-[1000px] mx-auto">
        <div className="w-full max-w-[500px] max-h-[300px] aspect-square relative rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-2xl lg:rounded-2xl">
          <Image
            src={result.urlImage}
            alt={result.name}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 500px, 100vw"
          />
        </div>

        <div className="flex flex-col gap-6 w-full max-w-[500px] px-5">
          <div className="flex justify-between items-center md:justify-start gap-10">
            <h1 className="text-3xl font-bold">{result.name}</h1>
            <p className="bg-primary font-bold text-white text-sm py-1 px-2 rounded-full">
              {result.category}
            </p>
          </div>
          <div className="flex gap-10 text-lg items-center">
            <p className="flex gap-2 items-center">
              <Timer />
              <span>{result.cookTimer}</span>
            </p>
            <p className="flex gap-2 items-center">
              <Soup />
              <span>{result.portion}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 px-5 md:flex-row md:justify-around md:gap-10 md:col-span-2 ">
          <div className="max-w-[400px]">
            <h2 className="text-xl font-bold">Ingredients</h2>
            <ul className="list-disc ml-5 space-y-4 mt-4 h-[250px] md:h-[400px] px-3 overflow-y-auto list-inside">
              {result.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="max-w-[400px]">
            <h2 className="text-xl font-bold">Modo de Preparo</h2>
            <ul className="list-disc ml-5 space-y-4 mt-4 h-[300px] md:h-[400px] px-3 overflow-y-auto list-inside">
              {result.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecipePage;
