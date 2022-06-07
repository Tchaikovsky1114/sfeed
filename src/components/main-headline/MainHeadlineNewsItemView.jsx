import React from 'react';
import { Link} from 'react-router-dom';
import HeadlineItemTemplate from '../../layouts/HeadlineItemTemplate';

const HeadlineNewsItemView = ({article,dynamicURLPath}) => {
  
  return (
      <HeadlineItemTemplate>
      <Link class="hover:text-accent" to={`/article/${dynamicURLPath}`}>{article.title}</Link>
      </HeadlineItemTemplate>
    
  );
};

export default HeadlineNewsItemView;