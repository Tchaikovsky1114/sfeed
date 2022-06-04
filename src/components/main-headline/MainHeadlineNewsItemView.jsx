import React from 'react';
import { Link} from 'react-router-dom';
import HeadlineItemTemplate from '../../layouts/HeadlineItemTemplate';

const HeadlineNewsItemView = ({article}) => {
  const dynamicURLPath = (article.source.name + article.author + article.publishedAt).replace(/\.|:|-|\//g,"");
  return (
      <HeadlineItemTemplate>
      <Link class="hover:text-accent" to={`/article/${dynamicURLPath}`}>{article.title}</Link>
      </HeadlineItemTemplate>
    
  );
};

export default HeadlineNewsItemView;