import { Skeleton } from "@/components/ui/skeleton";

const LoadingReceipesList = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="w-[200px] h-[150px] " />
      ))}
    </>
  );
};

export default LoadingReceipesList;
