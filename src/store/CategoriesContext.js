import { createContext, useEffect } from "react";
import {useParams} from 'react-router-dom'
import useHttp from "../hooks/useHttp";
import { getHeadlineNews } from "../lib/api";



export const CategoriesContext = createContext({
  categoryNews: [],
  status: {},
  error: '',
  getNews: (dynamicSegment) => {},
  sendRequest: (category) => {}
})

const CategoriesProvider = ({children}) => {
  const {sendRequest,status,error,data:categoryNews} = useHttp(getHeadlineNews);
  const params = useParams();
  const {categories} = params;
  
  const getNews = (dynamicSegment) => {
    const article = categoryNews.articles.find((category) => (category.source.name + category.author + category.publishedAt).replace(/\.|:|-|\//g,"") === dynamicSegment)
    return article;
  }
  useEffect(()=>{
    if(!categories){
      sendRequest();
      return;  
    }else{
      sendRequest(categories);
    }
   return () => sendRequest(categories);
  },[sendRequest,categories])
  
  if(status === 'pending'){
    return <div class="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Now Loading.........</div>
  }
  if(categoryNews === null ){
    return <div>something wrong!</div>
  }
  const categoryContext = {
    categoryNews,
    status,
    getNews,
    error,
  }
  return  <CategoriesContext.Provider value={categoryContext}>{children}</CategoriesContext.Provider>
}

export default CategoriesProvider