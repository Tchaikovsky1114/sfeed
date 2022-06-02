import React from 'react';

const Button = ({text}) => {
  return (
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:tet-white hover:bg-purple-600 hover:border-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
    {text}
  </button>
  );
};

export default Button;