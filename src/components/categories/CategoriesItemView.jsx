import React from 'react';
import { Link} from 'react-router-dom';

const CategoriesItemView = ({article,category,dynamicSegment}) => {
  return (
    <li className='mt-2'>
      <Link className="hover:text-accent" to={`/${category}/${dynamicSegment}`} >{article.title}</Link>
    </li>
  );
};

export default CategoriesItemView;