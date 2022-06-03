import React from 'react';

const ArticleDetailsView = ({article}) => {
  console.log(article)
  return (
    <div>
      <div class="text-2xl text-accent">{article.title}</div>

      <div class="text-right text-secondary"><span class="text-sm">{article.publishedAt.substr(0,4)}년 {article.publishedAt.substr(5,2)}월 {article.publishedAt.substr(8,2)}일</span>
      {" "}<span class="text-xs">{article.publishedAt.substr(11,2)}시 {article.publishedAt.substr(14,2)}분</span></div>
    <img class='w-full'  src={article.urlToImage} alt={`${article.title} 이미지`} />
    <div class="mt-12 text-xl">{article.description}</div>
    </div>
  );
};

export default ArticleDetailsView;