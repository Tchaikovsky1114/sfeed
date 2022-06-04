import React, { useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '../hooks/useDarkMode';

const LightAndNightToggleButton = () => {
  const [isDark, setIsDark] = useDarkMode();

  const toggleDarkMode = (checked) => {
    setIsDark(checked);
  };

  return (
    <>
      <DarkModeSwitch
        className={`rounded-full duration-300 ring-2 p-1 mb-2 ${
          isDark ? 'bg-slate-800 ring-blue-400' : 'bg-red-400 ring-red-700'
        }
       
        `}
        
        checked={isDark}
        onChange={toggleDarkMode}
        size={32}
        moonColor="royalblue"
        sunColor="red"
      />
    </>
  );
};

export default LightAndNightToggleButton;
