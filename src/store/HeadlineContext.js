import React from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import useHttp from '../hooks/useHttp'
import {getHeadlineNews} from '../lib/api'


export const HeadlineContext = createContext({
  headlineNews: [],
  status : {},
  error : '',
  getNews: () => {}
})

const HeadlineProvider = ({children}) => { 
  const {sendRequest,status,data:headlineNews,error} = useHttp(getHeadlineNews)

  
  useEffect(()=>{
    (async function(){
    await sendRequest()
  }())
  },[sendRequest])
  if(status === 'pending'){
    return <div class="text-xl">Now Loading.........</div>
  }
  if(headlineNews === null){
    return <div>something wrong!</div>
  }
  
  const getNews = (dynamicSegment) => {
    const article = headlineNews.articles.find((headline) => (headline.source.name + headline.author + headline.publishedAt).replace(/\.|:|-|\//g,"") === dynamicSegment)
    return article;
  }
  const headlineContext = {
    headlineNews,
    status,
    error,
    getNews
  }

  return <HeadlineContext.Provider value={headlineContext}>{children}</HeadlineContext.Provider>
}

export default HeadlineProvider