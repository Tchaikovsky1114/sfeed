import React from 'react';
import ArticleTemplete from '../components/main-article/MainArticle';
import HeadlineProvider from '../store/HeadlineContext';


const Articles = () => {
  return (
    <HeadlineProvider>
      <ArticleTemplete />
    </HeadlineProvider>
      
   
  );
};

export default Articles;