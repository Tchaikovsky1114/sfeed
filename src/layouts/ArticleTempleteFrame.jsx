import React from 'react';

const ArticleTempleteFrame = ({article,children}) => {
  return (
    <div class="mt-16 max-w-xl rounded-lg bg-secondary flex justify-center items-center flex-col border-2 p-8">
    <div class="text-left">SFEED NEWS</div>
    {children}
    <div class="mt-8 w-full flex justify-start items-start">더 알고싶다면? {" "}<a class="text-accent px-4" href={article.url}>▷{article.source.name || null} ◁</a></div> 
    </div>
  );
};

export default ArticleTempleteFrame;