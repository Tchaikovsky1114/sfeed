import React from 'react';
import { Link, useParams } from 'react-router-dom';

const HeadlineNewsItemView = ({article}) => {
  
  const dynamicURLPath = (article.source.name + article.author + article.publishedAt).replace(/\.|:|-|\//g,"");
  console.log(dynamicURLPath)
  return (
      <ul>
      <Link class="hover:text-accent" to={`/article/${dynamicURLPath}`}>{article.title}</Link>
      </ul>
    
  );
};

export default HeadlineNewsItemView;