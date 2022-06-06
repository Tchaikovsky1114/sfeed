import React from 'react';

const HeadlineTemplete = ({children}) => {
  return (
    <ul className="w-full lg:text-2xl md:text-xl sm:text-base xs:text-xs 2xs:text-xs border-4 border-solid rounded-sm m-1 px-4 py-4 mb-12">
      {children}
    </ul>
  );
};

export default HeadlineTemplete;