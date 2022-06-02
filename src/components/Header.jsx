import React from 'react';
import LightAndNightToggleButton from '../assets/LightAndNightToggleButton';
import {NavLink,Link} from 'react-router-dom'
const Header = () => {
  return (
    
      
    <div class="inline-flex justify-between items-center">
    <LightAndNightToggleButton />
      <nav class="flex gap-4 px-12">
      {/* business, entertainment, general health, science, sports, technology */}
        <NavLink to='/business'>비지니스</NavLink>
        <NavLink to='/entertainment'>연예</NavLink>
        <NavLink to='/general'>일반</NavLink>
        <NavLink to='/health'>건강</NavLink>
        <NavLink to='/science'>과학</NavLink>
        <NavLink to='/sports'>스포츠</NavLink>
        <NavLink to='/technology'>기술/IT</NavLink>
      </nav>

      <div className='flex flex-col items-center justify-center'>
        <div>
          <Link to="/" class="text-xl">SFEED</Link>
        </div>
        <div class="bg-primary text-secondary text-xs">
          <h2>Speed feeds for you</h2>
        </div>
      </div>
    </div>
    
  );
};

export default Header;