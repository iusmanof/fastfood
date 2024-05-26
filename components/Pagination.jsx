import ReactPaginate from "react-paginate";
import styles from "../style/Pagination.module.scss";

const Pagination = ({setPage}) => {
  return (
    <div className={styles.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => setPage(event.selected + 1)}
        pageRangeDisplayed={2}
        pageCount={4}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
