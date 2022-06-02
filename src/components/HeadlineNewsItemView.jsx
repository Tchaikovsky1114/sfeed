import React from 'react';
import { Link} from 'react-router-dom';

const HeadlineNewsItemView = ({article}) => {

  const dynamicURLPath = (article.source.name + article.author + article.publishedAt).replace(/\.|:|-|\//g,"");
  console.log(dynamicURLPath)
  return (
      <li class="pt-4 text-lg">
      <Link class="hover:text-accent" to={`/article/${dynamicURLPath}`}>{article.title}</Link>
      </li>
    
  );
};

export default HeadlineNewsItemView;