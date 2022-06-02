import React from 'react';


const MainLayout = ({children}) => {
  return (
    <div class=" bg-primary text-primary flex flex-col justify-center items-center m-4">
      {children}
    </div>
  );
};

export default MainLayout;