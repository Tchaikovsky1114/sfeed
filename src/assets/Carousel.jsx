import React from 'react';
import { useContext } from 'react';
import { HeadlineContext } from '../store/HeadlineContext';

import { useState } from 'react';

import CarouselView from './CarouselView';
const Carousel = () => {
  const { headlineNews } = useContext(HeadlineContext);
  const { articles } = headlineNews;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevArticleSlide = () => {
    let newSlide = currentSlide === 0 ? articles.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleNextArticleSlide = () => {
    let newSlide = currentSlide === articles.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <CarouselView
      handleNextArticleSlide={handleNextArticleSlide}
      handlePrevArticleSlide={handlePrevArticleSlide}
      currentSlide={currentSlide}
      articles={articles}
    />
  );
};

export default Carousel;
