import React, { useContext } from 'react';
import { HeadlineContext } from '../../store/HeadlineContext';

import HeadlineNewsView from './MainHeadlineNewsView';

const HeadlineNews = () => {
  const headlineCtx = useContext(HeadlineContext);
  const { headlineNews } = headlineCtx;
  const {articles} = headlineNews
  return <HeadlineNewsView articles={articles} />;
};

export default HeadlineNews;
