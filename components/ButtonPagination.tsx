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

interface ButtonPaginationProps {
  typeRecipePage: TypeRecipeResponse;
}

const ButtonPagination = ({ typeRecipePage }: ButtonPaginationProps) => {
  const { currentPage, totalPages, hasNextPage, hasPreviousPage } =
    typeRecipePage;

  const nextPage = () => {
    if (hasNextPage) {
      alert("Next page");
    }
  };

  const previousPage = () => {
    if (hasPreviousPage) {
      alert("Previous page");
    }
  };

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      alert("Go to page");
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button className="text-center">
            <ChevronLeft size={25} />
            <span>Previous</span>
          </Button>
        </PaginationItem>
        {currentPage > 1 && (
          <PaginationItem>
            <Button onClick={() => goToPage(1)}>1</Button>
          </PaginationItem>
        )}
        {currentPage > 2 && (
          <PaginationItem>
            <Button onClick={() => goToPage(2)}>2</Button>
          </PaginationItem>
        )}
        {currentPage > 3 && (
          <PaginationItem>
            <Button onClick={() => goToPage(3)}>3</Button>
          </PaginationItem>
        )}
        <PaginationItem>
          <Button>{currentPage}</Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {currentPage < totalPages && (
          <PaginationItem>
            <Button onClick={() => goToPage(totalPages - 1)}>
              {totalPages - 1}
            </Button>
          </PaginationItem>
        )}
        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <Button onClick={() => goToPage(totalPages)}>{totalPages}</Button>
          </PaginationItem>
        )}
        <PaginationItem>
          <Button className="text-center">
            <span>Next</span>
            <ChevronRight size={25} />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ButtonPagination;
