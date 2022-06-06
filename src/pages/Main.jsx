import React from 'react';
import Carousel from '../assets/Carousel';
import Banner from '../components/Banner';
import HeadlineNews from '../components/main-headline/MainHeadlineNews';


const Main = () => {
  return (
    <div class="mt-10 w-auto flex flex-col max-w-3xl h-40 p-12">
      <Banner />
      <Carousel />
      <HeadlineNews />
      
    </div>
  );
};

export default Main;