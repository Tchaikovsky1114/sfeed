import React from 'react';
import CategoriesItem from './CategoriesItem';
import uuid from 'react-uuid';
import Pagination from '../../assets/Pagination';
const CategoriesTempleteView = ({totalResults,articles,categories}) => {
  
  return (
    <>
    <div class="lg:text-xl md:text-lg min-w-256 text-center border-4 border-solid text-accent rounded-sm m-1 mt-12 px-4 py-2">
      <div>{categories.charAt(0).toUpperCase() + categories.slice(1)} 관련 기사가 총 {totalResults}개 있어요</div>
    </div>
    <ul class="lg:text-2xl md:text-xl sm:text-base xs:text-xs 2xs:text-xs border-4 border-solid rounded-sm m-1 px-4 py-2">
      {articles?.map((article) =><CategoriesItem key={uuid()} categories={categories} article={article} />)}
    </ul>
    <Pagination totalResults={totalResults} articles={articles} categories={categories} />
    </>
  );
};

export default CategoriesTempleteView;