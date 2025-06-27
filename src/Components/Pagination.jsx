import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
        return (
               <div className="flex justify-center space-x-2 mt-6">
      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === num + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {num + 1}
        </button>
      ))}
    </div>
        );
};

export default Pagination;