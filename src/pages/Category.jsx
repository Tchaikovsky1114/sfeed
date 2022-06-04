import React from 'react';
import { useEffect } from 'react';
import useHttp from '../hooks/useHttp';
import { getHeadlineNews } from '../lib/api';
import {useParams} from 'react-router-dom'
import CategoryTemplete from '../components/category-article/CategoryTemplete';

const Category = () => {
  const {sendRequest,status,data:categoriesNews} = useHttp(getHeadlineNews)
  const {categoryId,categories} = useParams()
  
  useEffect(()=>{
    sendRequest(categories)
  },[sendRequest,categories])



  if(status === 'pending'){
    return <div class="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Now Loading.........</div>
  }
  if(categoriesNews === null ){
    return <div>something wrong!</div>
  }
  

  const getNews = (dynamicSegment) => {
    const article = categoriesNews?.articles.find((category) => (category.source.name + category.author + category.publishedAt).replace(/\.|:|-|\//g,"") === dynamicSegment)
    return article;
  }
  const categoryNews = getNews(categoryId)


  
  return <CategoryTemplete article={categoryNews} />
};

export default Category;