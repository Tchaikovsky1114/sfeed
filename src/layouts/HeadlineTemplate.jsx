import React from 'react';

const HeadlineTemplete = ({children}) => {
  return (
    <ul className="lg:text-2xl md:text-xl sm:text-base xs:text-xs 2xs:text-xs border-4 border-solid rounded-sm m-1 px-4 py-2">
      {children}
    </ul>
  );
};

export default HeadlineTemplete;