import { product_page_size } from "@/constants/constants.pageSize";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  total,
  onPageChange,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / product_page_size);
  const [currentPage, setCurrentPage] = useState(page);

  // const handleChangePage = (page: number) => {
  //   const params = new URLSearchParams(searchParams.toString());

  //   params.set("page", page.toString()); // Cập nhật hoặc thêm query 'page'

  //   router.push(`?${params.toString()}`); // Cập nhật URL mà vẫn giữ query cũ
  // };

  // Tính các trang cần hiển thị
  const getPageNumbers = (currentPage: number) => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, 3, "...");
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "..."
        );
      }
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers(currentPage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString()); // Cập nhật hoặc thêm query 'page'
    router.push(`?${params.toString()}`); // Cập nhật URL mà vẫn giữ query cũ
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-16 select-none">
      {/* Nút "Trang trước" */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>

      {/* Nút phân trang */}
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="px-3 py-1">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageChange(Number(number))}
            className={`px-3 py-1 rounded ${
              number === currentPage
                ? "bg-[#111] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {number}
          </button>
        )
      )}

      {/* Nút "Trang sau" */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
