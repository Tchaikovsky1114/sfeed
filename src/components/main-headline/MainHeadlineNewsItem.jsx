import React from 'react';
import HeadlineNewsItemView from './MainHeadlineNewsItemView';

const HeadlineNewsItem = ({article}) => {
  const dynamicURLPath = (article.source.name + article.author + article.publishedAt).replace(/\.|:|-|\//g,"");
  return <HeadlineNewsItemView article={article} dynamicURLPath={dynamicURLPath} />
    
};

export default HeadlineNewsItem;