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
        className={` absolute top-3 left-2 bg-red-400 rounded-3xl p-1 duration-300 ${
          isDark ? 'bg-slate-800' : 'bg-red-400'
        }`}
        checked={isDark}
        onChange={toggleDarkMode}
        size={40}
        moonColor="royalblue"
        sunColor="red"
      />
    </>
  );
};

export default LightAndNightToggleButton;
