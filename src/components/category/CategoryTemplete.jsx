import React from 'react';
import ArticleTempleteFrame from '../../layouts/ArticleTempleteFrame';
import CategoryDetail from './CategoryDetail';

const CategoryTemplete = ({article}) => {
  console.log(article)
  return <ArticleTempleteFrame article={article}>
    <CategoryDetail article={article} />
  </ArticleTempleteFrame>
};

export default CategoryTemplete;