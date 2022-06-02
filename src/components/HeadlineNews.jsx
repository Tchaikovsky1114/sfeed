import React, { useContext } from 'react';
import HeadlineProvider, { HeadlineContext } from '../store/HeadlineContext';
import HeadlineNewsItem from './HeadlineNewsItem';
import uuid from 'react-uuid';
import HeadlineNewsView from './HeadlineNewsView';

const HeadlineNews = () => {
  const headlineCtx = useContext(HeadlineContext)
  const {headlineNews} = headlineCtx;

  return <HeadlineNewsView articles={headlineNews.articles} />
};

export default HeadlineNews;