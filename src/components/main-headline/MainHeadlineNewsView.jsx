import React from 'react';
import HeadlineNewsItem from './MainHeadlineNewsItem';
import uuid from 'react-uuid';
import HeadlineTemplate from '../../layouts/HeadlineTemplate';
const HeadlineNewsView = ({articles}) => {
  return (
    <HeadlineTemplate>
      {articles?.map((article) =>
       <HeadlineNewsItem key={uuid()} article={article} />
       )}
    </HeadlineTemplate>
  );
};

export default HeadlineNewsView;