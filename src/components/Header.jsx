import React from 'react';
import LightAndNightToggleButton from '../assets/LightAndNightToggleButton';
import {NavLink,Link} from 'react-router-dom'
const Header = () => {
  const navLinkCategory = ['business','entertainment','general','health','science','sports','technology']
  return (
    
      
    <div class="inline-flex justify-between items-center">
    <LightAndNightToggleButton />
      <nav class="flex gap-4 px-12">
      {/* business, entertainment, general health, science, sports, technology */}
        {navLinkCategory.map((item) =><NavLink style={({isActive}) =>{
          return {
            display:'block',
            paddingBottom: '.2rem',
            borderBottom: isActive ? '2px solid royalblue' : '2px solid white' ,
            color: isActive ? 'royalblue' : ''
          }
        }} to={`/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</NavLink>)}
        
      </nav>

      <div className='flex flex-col items-center justify-center'>
        <div>
          <Link to="/" class="text-xl">SFEED</Link>
        </div>
        <div class="bg-primary text-secondary text-xs">
          <h2>대화를 위한 상식, SFEED</h2>
        </div>
      </div>
    </div>
    
  );
};

export default Header;