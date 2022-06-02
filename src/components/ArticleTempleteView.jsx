import React from 'react';
import ArticleDetails from './ArticleDetails';

const ArticleTempleteView = ({article}) => {
  return (
    <div class="mt-32 max-w-xl rounded-lg bg-secondary flex justify-center items-center flex-col border-2 p-8">
    <div class="text-left">SFFED NEWS</div>
    <ArticleDetails article={article} />
    </div>
  );
};

export default ArticleTempleteView;