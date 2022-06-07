import React from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import useHttp from '../hooks/useHttp'
import {getHeadlineNews} from '../lib/api'
import {useParams} from 'react-router-dom'

export const HeadlineContext = createContext({
  headlineNews: [],
  status : {},
  error : '',
  getNews: (dynamicSegment) => {},
  
})
 



const HeadlineProvider = ({children}) => { 
  const {sendRequest,status,data:headlineNews,error} = useHttp(getHeadlineNews);

  useEffect(()=>{
  sendRequest()
  },[sendRequest])

  
  if(status === 'pending'){
    return <div class="text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Now Loading.........</div>
  }
  if(headlineNews === null){
    return <div class="text-red-400">something wrong!</div>
  }
  
  const getNews = (dynamicSegment) => {
    
    const article = headlineNews.articles.find((headline) => (headline.source.name + headline.author + headline.publishedAt).replace(/\.|:|-|\//g,"") === dynamicSegment)
    
    return article;
  }
  const headlineContext = {
    headlineNews,
    status,
    error,
    getNews,
    
  }

  return <HeadlineContext.Provider value={headlineContext}>{children}</HeadlineContext.Provider>
}

export default HeadlineProvider