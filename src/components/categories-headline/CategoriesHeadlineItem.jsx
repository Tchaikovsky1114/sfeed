import React, { Suspense } from 'react';
import CategoriesItemView from './CategoriesHeadlineItemView';

const CategoriesItem = ({ article, categories }) => {
  const dynamicSegment = (
    article.source.name +
    article.author +
    article.publishedAt
  ).replace(/\.|:|-|\//g, '');
  return (
    <CategoriesItemView
      article={article}
      category={categories}
      dynamicSegment={dynamicSegment}
    />
  );
};

export default CategoriesItem;
