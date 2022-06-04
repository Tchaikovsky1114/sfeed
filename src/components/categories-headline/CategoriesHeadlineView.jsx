import React from 'react';
import CategoriesItem from './CategoriesHeadlineItem';
import uuid from 'react-uuid';
import Pagination from '../../assets/Pagination';
import CategoriesBannerFrame from '../../layouts/CategoriesBannerFrame';
import HeadlineTemplate from '../../layouts/HeadlineTemplate';
const CategoriesTempleteView = ({totalResults,articles,categories}) => {
  
  return (
    <>
    <CategoriesBannerFrame totalResults={totalResults} categories={categories} />
    <HeadlineTemplate>
      {articles?.map((article) =><CategoriesItem key={uuid()} categories={categories} article={article} />)}
      </HeadlineTemplate>
    <Pagination totalResults={totalResults} articles={articles} categories={categories} />
    </>
  );
};

export default CategoriesTempleteView;