import React from 'react';
import CategoriesTempleteView from './CategoriesHeadlineView';

const CategoriesTemplete = ({ categoryNews, categories }) => {
  const { articles, totalResults } = categoryNews;
  // const scrollY = useScroll(2000)
  // console.log(scrollY)

  // useEffect(()=>{
  //   window.scrollTo(0,scrollY)
  // },[scrollY])
  
  // console.log(scrollY)
  return (
    <CategoriesTempleteView
      categories={categories}
      articles={articles}
      totalResults={totalResults}
    />
  );
};

export default CategoriesTemplete;
