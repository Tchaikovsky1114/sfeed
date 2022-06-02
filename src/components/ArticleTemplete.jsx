import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HeadlineContext } from '../store/HeadlineContext';
import ArticleTempleteView from './ArticleTempleteView';

const ArticleTemplete = () => {
  const headlineCtx = useContext(HeadlineContext)
  const {getNews} = headlineCtx
  const dynamicSegment = useParams();
  const article = getNews(dynamicSegment.articleId)

  console.log(article)

  return <ArticleTempleteView article={article} />
};

export default ArticleTemplete;