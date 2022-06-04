import React from 'react';
import uuid from 'react-uuid';

const PaginationView = ({
  isDark,
  pageNumber,
  totalResults,
  getNewsOnPage,
  page,
  increasePageNumber,
  decreasePageNumber,
}) => {
  return (
    <div
      className={` bg-secondary border w-fit border-slate-700 px-4 py-3 flex items-center justify-between rounded-md sm:px-6 absolute left-1/2 -translate-x-1/2 `}
    >
      <div className="m-auto flex justify-center sm:hidden ">
        <button
          href="#"
          className={`relative inline-flex items-center shrink px-2 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
          onClick={decreasePageNumber}
          // onClick={getNewsOnPage}
        >
          Previous
        </button>
        <button
          href="#"
          className="ml-3 relative inline-flex items-center px-5 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={decreasePageNumber}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-primary pr-4">
            Showing <span className="font-medium">1</span> to{' '}
            <span className="font-medium">10</span> of{' '}
            <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={decreasePageNumber}
            >
              <span className="sr-only">Previous</span>
              <div className="h-5 w-5 font-bold" aria-hidden="true">
                ←
              </div>
            </button>
            {/* create button */}
            {Array(pageNumber)
              .fill()
              .map((_, i) => (
                <button
                  key={uuid()}
                  aria-current={page}
                  className="z-10 bg-primary border-slate-300 text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  onClick={() => getNewsOnPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

            <button
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              onClick={increasePageNumber}
            >
              <span className="sr-only">Next</span>
              <div className="h-5 w-5 font-bold" aria-hidden="true">
                →
              </div>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PaginationView;
