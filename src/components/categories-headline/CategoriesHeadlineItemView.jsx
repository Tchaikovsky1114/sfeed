import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeadlineItemTemplate from '../../layouts/HeadlineItemTemplate';

const CategoriesItemView = ({ article, category, dynamicSegment }) => {
  
  return (
    <HeadlineItemTemplate>
      <Link className="hover:text-accent" to={`/${category}/${dynamicSegment}`}>
        {article.title}
      </Link>
    </HeadlineItemTemplate>
  );
};

export default CategoriesItemView;
