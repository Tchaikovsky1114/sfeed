import React from 'react';


import useDarkMode from '../hooks/useDarkMode';
import LightAndNightToggleButtonView from './LightAndNightToggleButtonView';

const LightAndNightToggleButton = () => {
  const [isDark, setIsDark] = useDarkMode();

  const toggleDarkMode = (checked) => {
    setIsDark(checked);
  };

  return <LightAndNightToggleButtonView isDark={isDark} toggleDarkMode={toggleDarkMode} />
    
};

export default LightAndNightToggleButton;
