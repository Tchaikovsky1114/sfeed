import React from 'react';
import HeadlineNewsItem from './HeadlineNewsItem';
import uuid from 'react-uuid';
const HeadlineNewsView = ({articles}) => {
  return (
    <div class="border m-1 p-1">
      {articles?.map((article) =>
       <HeadlineNewsItem key={uuid()} article={article} />
       )}
    </div>
  );
};

export default HeadlineNewsView;