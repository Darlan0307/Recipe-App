import { RecipeType } from "@/app/@types/RecipeType";
import RecipeItem from "./recipe-item";

interface RecipeListProps {
  data: RecipeType[];
}

const RecipeList = ({ data }: RecipeListProps) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-6">
      {data &&
        data.map((recipe) => (
          <RecipeItem key={crypto.randomUUID()} recipe={recipe} />
        ))}
    </div>
  );
};

export default RecipeList;
