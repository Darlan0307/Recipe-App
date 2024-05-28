import { Skeleton } from "@/components/ui/skeleton";

function LoadingReceipesList() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-[200px] h-[150px] ">
          <Skeleton key={index} className="recipe-skeleton" />
        </div>
      ))}
    </>
  );
};

export default LoadingReceipesList;
