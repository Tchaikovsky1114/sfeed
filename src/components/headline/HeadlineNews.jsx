import React, { useContext } from 'react';
import { HeadlineContext } from '../../store/HeadlineContext';


import HeadlineNewsView from './HeadlineNewsView';

const HeadlineNews = () => {
  const headlineCtx = useContext(HeadlineContext)
  const {headlineNews} = headlineCtx;

  return <HeadlineNewsView articles={headlineNews.articles} />
};

export default HeadlineNews;