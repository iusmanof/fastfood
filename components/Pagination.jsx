import ReactPaginate from "react-paginate";
import styles from "../style/Pagination.module.scss";

const Pagination = ({value, onChangePage}) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={2}
        pageCount={4}
        previousLabel="<"
        forcePage={value}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
