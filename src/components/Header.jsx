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
                  : '2px solid white',
                color: isActive ? 'royalblue' : '',
              };
            }}
            to={`/${item}`}
            
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </NavLink>
        ))}
      </nav>

      <div className="flex basis-0 shrink min-w-fit 2xs:flex-row xs:flex-row md:flex-col xs:gap-4 md:gap-0 items-center justify-center xs:absolute md:static xs:top-12 md:top-4 xs:left-1/2 md:ml-16 xs:-translate-x-1/2 md:transfrom-none">
        <div className="flex w-full justify-center items-center xs:gap-4 md:gap-2 md:py-2 sm:mt-2">
          <Link to="/" class="xs:text-2xl md:text-4xl md:mb-0">
            SFEED 
          </Link>
          <LightAndNightToggleButton />
        </div>
        <div class="text-secondary text-xs xs:mb-2 whitespace-nowrap xs:hidden md:block ">
          <h2 className=''>즐거운 Ice Breaking, SFEED!</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
