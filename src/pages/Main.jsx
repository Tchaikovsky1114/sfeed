import React from 'react';
import Banner from '../components/Banner';
import HeadlineNews from '../components/HeadlineNews';
import HeadlineProvider from '../store/HeadlineContext';


const Main = () => {
  return (
    <div class="mt-10 w-auto flex flex-col max-w-3xl h-40 p-12">
      <Banner />
      <HeadlineProvider>
      <HeadlineNews />
      </HeadlineProvider>
    </div>
  );
};

export default Main;