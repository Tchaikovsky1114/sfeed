import React from 'react';
import ArticleTemplete from '../../layouts/ArticleTemplete';
import CategoryDetail from './CategoryDetail';

const CategoryTemplete = ({article}) => {
  return <ArticleTemplete article={article}>
    <CategoryDetail article={article} />
  </ArticleTemplete>
};

export default CategoryTemplete;