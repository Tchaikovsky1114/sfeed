import React from 'react';
import CategoriesTempleteView from './CategoriesTempleteView';

const CategoriesTemplete = ({categoryNews,categories}) => {
  
  const {articles,totalResults} = categoryNews;
  
  return <CategoriesTempleteView categories={categories} articles={articles} totalResults={totalResults} />;
};

export default CategoriesTemplete;