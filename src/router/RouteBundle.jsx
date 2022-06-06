import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Article from '../pages/Article';

import Articles from '../pages/Articles';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Main from '../pages/Main';
import UtilProvider from '../store/UtilContext';


const RouteBundle = () => {
  return (
    <Routes>
      <Route path ="/" element={<Main />} />
      <Route path ="article" element={<Articles />}/>
      <Route path ="article/:articleId" element={<Article />} />
      <Route path =":categories" element={
      <UtilProvider>
      <Categories/>
      </UtilProvider>} />
      <Route path =":categories/:categoryId" element={
      <UtilProvider>
      <Category />
      </UtilProvider>}></Route>
    </Routes>
  );
};

export default RouteBundle;