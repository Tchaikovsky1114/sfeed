import React, { useContext } from 'react';
import ArticleTemplete from '../components/main-article/MainArticle';
import { HeadlineContext } from '../store/HeadlineContext';
import {useParams} from 'react-router-dom';

const Article = () => {
  const dynamicSegment = useParams();
  const headlineCtx = useContext(HeadlineContext)
  const {getNews} = headlineCtx;
  const article = getNews(dynamicSegment.articleId);
  
  return <ArticleTemplete article={article} />
    
};

export default Article;