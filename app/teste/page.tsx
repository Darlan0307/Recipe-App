import Image from "next/image";
import { fetchRecipes } from "@/hooks/fetch-recipes";
import { TypeRecipe } from "../@types/types-recipes";

const Teste = async () => {
  const recipes = await fetchRecipes();

  return (
    <div>
      <h1>Receitas</h1>

      <section>
        {recipes?.data.map((recipe: TypeRecipe) => (
          <article key={recipe.id}>
            <div className="max-w-[150px] h-[150px] relative">
              <Image
                className="object-cover"
                src={recipe.urlImage}
                alt={recipe.name}
                sizes="(min-width: 768px) 500px, 100vw"
                fill
                priority
              />
            </div>
            <h2>{recipe.name}</h2>
            <p>{recipe.cookTimer}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Teste;
