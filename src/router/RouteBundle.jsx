import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Article from '../pages/Article';
import Articles from '../pages/Articles';
import Categories from '../pages/Categories';
import Category from '../pages/Category';
import Main from '../pages/Main';


const RouteBundle = () => {
  return (
    <Routes>
      <Route path ="/" element={<Main />} />
      <Route path ="/article" element={<Articles />}>
      <Route path =":articleId" element={<Article />}/>
      </Route>

      <Route path ="/:categories" element={<Categories/>}>
      <Route path =":categories/articleId" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default RouteBundle;