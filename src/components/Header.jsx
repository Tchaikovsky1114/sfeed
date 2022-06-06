import React from 'react';
import LightAndNightToggleButton from '../assets/LightAndNightToggleButton';
import { NavLink, Link } from 'react-router-dom';
import uuid from 'react-uuid';

const Header = () => {
  const navLinkCategory = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  
  return (
    <div className="xs:flex md:flex-col-reverse w-full xs:justify-center md:justify-between md:items-center gap-4">
      
      <nav className="m-auto w-fit basis-1 flex justify-center xs:gap-4 md:gap-8 text-primary 2xs:text-xs xs:text-xs sm:text-base md:text-lg">
        {navLinkCategory.map((item) => (
          <NavLink
            key={uuid()}
            style={({ isActive }) => {
              return {
                display: 'block',
                paddingBottom: '.2rem',
                borderBottom: isActive
                  ? '2px solid royalblue'
                  : '0',
                color: isActive ? 'royalblue' : '',
              };
            }}
            to={`/${item}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </NavLink>
        ))}
      </nav>

      <div className=" md:flex-col md:items-center md:justify-center md:min-w-full md:text-center 2xs:flex-row xs:flex-row  xs:gap-4 md:gap-0 absolute md:relative m-auto xs:top-12 md:top-4 left-1/2 -translate-x-1/2 md:transfrom-none md:pb-8">
        <div className="flex justify-center w-full items-center xs:gap-4 md:gap-2 md:py-2 sm:mt-2">
          <Link to="/" class="xs:text-2xl md:text-4xl">
            SFEED 
          </Link>
          <LightAndNightToggleButton />
        </div>
        <div class="text-secondary text-center text-xs xs:mb-2 whitespace-nowrap xs:hidden md:block ">
          <h2 className=''>즐거운 Ice Breaking, SFEED!</h2>  
        </div>
      </div>
    </div>
  );
};

export default Header;
