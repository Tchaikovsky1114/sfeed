import React, { Suspense } from 'react';
import CategoriesItemView from './CategoriesItemView';

const CategoriesItem = ({article,categories}) => {
   const dynamicSegment = (article.source.name + article.author + article.publishedAt).replace(/\.|:|-|\//g,"")
  return(
    <Suspense fallback={<p>data fetching....</p>}>
    <CategoriesItemView article={article} category={categories} dynamicSegment={dynamicSegment} />
    </Suspense>
  ) 
  
  
};

export default CategoriesItem;