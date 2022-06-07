import { useContext } from 'react';
import { useState } from 'react';
import { UtilContext } from '../store/UtilContext';
import PaginationView from './PaginationView';
export default function Pagination({ totalResults, articles, categories }) {
  
  const pageNumber =
    articles.length === 10
      ? Math.ceil(totalResults / articles.length)
      : Math.ceil(totalResults / 10);    
  const [page, setPage] = useState(1);
  const { currentPageNumber, getNewsOnPage, increasePageNumber, decreasePageNumber } =
    useContext(UtilContext);
    // const disabledToggle = pageNumber

  return (
    <PaginationView
      increasePageNumber={increasePageNumber}
      decreasePageNumber={decreasePageNumber}
      getNewsOnPage={getNewsOnPage}
      pageNumber={pageNumber}
      currentPageNumber={currentPageNumber}
      articles={articles}
      totalResults={totalResults}
      page={page}
      categories={categories}
    />
  );
}
