import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoriesTemplete from '../components/CategoriesTemplete';
import useHttp from '../hooks/useHttp';
import { getHeadlineNews } from '../lib/api';


const Categories = () => {
  const {sendRequest,status,data:categoryHeadlineNews} = useHttp(getHeadlineNews);
  const params = useParams();
  const {categories} = params;
  
  
  useEffect(()=>{
   sendRequest(categories);
   return () => sendRequest(categories);
  },[sendRequest,categories])
  
  if(status === 'pending'){
    return <div class="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Now Loading.........</div>
  }
  if(categoryHeadlineNews === null ){
    return <div>something wrong!</div>
  }

  return <CategoriesTemplete categoryHeadlineNews={categoryHeadlineNews} />
};

export default Categories;