import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 페이지 번호 범위를 생성하는 함수
  const generatePageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className={styles.pagination}>
      {/* 이전 페이지 버튼 */}
      <button
      
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* 페이지 번호 버튼들 */}
      {generatePageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? styles.active : ""}
        >
          {page}
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
