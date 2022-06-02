import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Article from '../pages/Article';
import Articles from '../pages/Articles';
import Main from '../pages/Main';


const RouteBundle = () => {
  return (
    <Routes>
      <Route path ="/" element={<Main />} />
      <Route path ="/article" element={<Articles />}>
      <Route path =":articleId" element={<Article />}/>
      </Route>
    </Routes>
  );
};

export default RouteBundle;