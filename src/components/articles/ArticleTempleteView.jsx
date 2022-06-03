import React from 'react';
import ArticleDetails from './ArticleDetails';

const ArticleTempleteView = ({article}) => {
  return (
    <div class="mt-16 max-w-xl rounded-lg bg-secondary flex justify-center items-center flex-col border-2 p-8">
    <div class="text-left">SFEED NEWS</div>
    <ArticleDetails article={article} />
    <div class="mt-8 w-full flex justify-start items-start">더 알고싶다면? {" "}<a class="text-accent px-4" href={article.url}>▷{article.source.name} ◁</a></div> 
    </div>
  );
};

export default ArticleTempleteView;