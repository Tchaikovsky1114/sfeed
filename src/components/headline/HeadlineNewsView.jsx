import React from 'react';
import HeadlineNewsItem from './HeadlineNewsItem';
import uuid from 'react-uuid';
const HeadlineNewsView = ({articles}) => {
  return (
    <ul class="border-4 border-solid rounded-sm m-1 px-4 py-2">
      {articles?.map((article) =>
       <HeadlineNewsItem key={uuid()} article={article} />
       )}
    </ul>
  );
};

export default HeadlineNewsView;