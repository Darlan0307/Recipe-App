"use client"; 

import React from "react";
import { useRouter } from "next/navigation";

type ButtonPaginationProps = {
  currentPage: number;
  totalPages: number;
};

const ButtonPagination: React.FC<ButtonPaginationProps> = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/recipes?page=${page}`);
  };

  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded bg-blue-500 text-white disabled:bg-gray-400"
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded bg-blue-500 text-white disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default ButtonPagination;
