import React from 'react';

const CategoriesBannerFrame = ({totalResults,categories}) => {
  return (
    <div class="lg:text-xl md:text-lg min-w-256 text-center border-4 border-solid text-accent rounded-sm m-1 mt-12 px-4 py-2">
      <div>{categories.charAt(0).toUpperCase() + categories.slice(1)} 관련 기사가 총 {totalResults}개 있어요</div>
    </div>
  );
};

export default CategoriesBannerFrame;