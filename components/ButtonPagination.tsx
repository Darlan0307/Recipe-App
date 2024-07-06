"use client";
import { TypeRecipeResponse } from "@/app/@types/types-recipes";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiltersRecipes } from "@/hooks/fetch-recipes";

interface ButtonPaginationProps {
  typeRecipePage: TypeRecipeResponse;
  updateFilter: (field: keyof FiltersRecipes, value: string | number) => void;
}

const ButtonPagination = ({
  typeRecipePage,
  updateFilter,
}: ButtonPaginationProps) => {
  const { currentPage, totalPages, hasNextPage, hasPreviousPage } =
    typeRecipePage;

  const nextPage = () => {
    if (hasNextPage) {
      updateFilter("page", currentPage + 1);
    }
  };

  const previousPage = () => {
    if (hasPreviousPage) {
      updateFilter("page", currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      updateFilter("page", page);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            className="text-center"
            variant="outline"
            onClick={previousPage}
          >
            <ChevronLeft size={25} />
            <span>Previous</span>
          </Button>
        </PaginationItem>
        {currentPage > 1 && (
          <PaginationItem>
            <Button variant="outline" onClick={() => goToPage(1)}>
              1
            </Button>
          </PaginationItem>
        )}
        {currentPage > 2 && (
          <PaginationItem>
            <Button variant="outline" onClick={() => goToPage(2)}>
              2
            </Button>
          </PaginationItem>
        )}
        {currentPage > 3 && (
          <PaginationItem>
            <Button variant="outline" onClick={() => goToPage(3)}>
              3
            </Button>
          </PaginationItem>
        )}
        {currentPage > 4 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <Button>{currentPage}</Button>
        </PaginationItem>
        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {currentPage < totalPages && (
          <PaginationItem>
            <Button variant="outline" onClick={() => goToPage(totalPages - 1)}>
              {totalPages - 1}
            </Button>
          </PaginationItem>
        )}
        {currentPage != totalPages && (
          <PaginationItem>
            <Button variant="outline" onClick={() => goToPage(totalPages)}>
              {totalPages}
            </Button>
          </PaginationItem>
        )}
        <PaginationItem>
          <Button variant="outline" className="text-center" onClick={nextPage}>
            <span>Next</span>
            <ChevronRight size={25} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ButtonPagination;
