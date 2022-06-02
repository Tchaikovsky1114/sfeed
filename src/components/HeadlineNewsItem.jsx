import React from 'react';
import { useContext } from 'react';
import { HeadlineContext } from '../store/HeadlineContext';
import HeadlineNewsItemView from './HeadlineNewsItemView';

const HeadlineNewsItem = ({article}) => {
  return <HeadlineNewsItemView article={article} />
    
};

export default HeadlineNewsItem;