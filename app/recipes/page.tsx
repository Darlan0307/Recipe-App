import Header from "@/components/header";
import { FetchRecipesRandom } from "./_actions/fetch-recipes-random";

const Recipes = async () => {
  // TODO testando a requisição, criar contexto para os dados
  await FetchRecipesRandom();

  return (
    <div>
      <Header />
      <p>page recipes</p>
    </div>
  );
};

export default Recipes;
