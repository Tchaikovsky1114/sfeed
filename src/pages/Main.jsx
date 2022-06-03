import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import HeadlineNews from '../components/headline/HeadlineNews';


const Main = () => {
  return (
    <div class="mt-10 w-auto flex flex-col max-w-3xl h-40 p-12">
      <Banner />
      <Suspense fallback={<p>Loading......</p>}>
      <HeadlineNews />
      </Suspense>
    </div>
  );
};

export default Main;