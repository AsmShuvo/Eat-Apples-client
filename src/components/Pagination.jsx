import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center my-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400"
            >
                Previous
            </button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 mx-1 ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'} rounded`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
