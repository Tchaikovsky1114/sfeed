import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CategoriesTemplete from '../components/categories-headline/CategoriesHeadline';
import useHttp from '../hooks/useHttp';
import { getHeadlineNews } from '../lib/api';
import { UtilContext } from '../store/UtilContext';


const Categories = () => {
  const {currentPageNumber,getNewsOnPage} = useContext(UtilContext)
  const {sendRequest,status,data:categoryNews} = useHttp(getHeadlineNews);
  const {pathname} = useLocation()
  const {categories} = useParams();

  useEffect(()=>{
   sendRequest(categories,currentPageNumber);
  },[sendRequest,categories,currentPageNumber])

  useEffect(()=>{
    getNewsOnPage(1)
  },[pathname])



  if(status === 'pending'){
    return <div class="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Now Loading.........</div>
  }

  if(categoryNews === null ){
    return <div>something wrong!</div>
  }
  

  
  return <CategoriesTemplete categories={categories} categoryNews={categoryNews} />
};

export default Categories;