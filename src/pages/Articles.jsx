import React from 'react';
import ArticleTemplete from '../components/ArticleTemplete';
import HeadlineProvider from '../store/HeadlineContext';

const Articles = () => {
  return (
    <HeadlineProvider>
      <ArticleTemplete />
    </HeadlineProvider>
      
   
  );
};

export default Articles;