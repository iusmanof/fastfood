import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import React from "react";

type PaginationProps = {
  value: number,
  onChangePage: any
}

const Pagination: React.FC<PaginationProps> = ({value, onChangePage}) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={1}
        pageCount={3}
        previousLabel="<"
        forcePage={value}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
