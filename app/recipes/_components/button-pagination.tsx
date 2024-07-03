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
        className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center h-[50px] w-[70px]"
      >
        Previous
      </button>
      <span>
      📑 {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="group text-white bg-gradient-to-r from-red-400 via-red-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-col items-center h-[50px] w-[70px]"
      >
        Next
      </button>
    </div>
  );
};

export default ButtonPagination;
