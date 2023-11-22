/* eslint-disable react/prop-types */
import './BasePagination.css';

const BasePagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="pagination-container">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous Page
        </button>
        <span className='page-indicator'>Page {currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next Page
        </button>
      </div>
    );
  };
  
  export default BasePagination;