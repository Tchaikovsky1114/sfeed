import React from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
const CarouselView = ({handleNextArticleSlide,handlePrevArticleSlide,currentSlide,articles}) => {
  return (
    <div id="indicators-carousel" class="relative border" data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">    
        {articles.map((article,index) => (
          <div
            className={` transition-all duration-500 relative
            ${index === currentSlide ? 'left-0 h-full' : '-left-full h-0'}
            `}
            key={uuid()}
            data-carousel-item={index}
          >
            <Link to={`/article/${(article.source.name + article.author + article.publishedAt).replace(/\.|:|-|\//g,"")}`}><span class="block w-full whitespace-nowrap text-ellipsis overflow-hidden bg-slate-50 bg-opacity-10 text-black text-lg absolute z-10">{article.title}</span></Link>
            <img
              src={article.urlToImage}
              class="block object-cover h-full absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 "
              alt={article.title}
              
            />
          </div>
        ))}
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevArticleSlide}
      >
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span class="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextArticleSlide}
      >
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span class="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CarouselView;