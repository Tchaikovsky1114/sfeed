import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
const LightAndNightToggleButtonView = ({toggleDarkMode,isDark}) => {
  return (
  <DarkModeSwitch
    className={`rounded-full duration-300 ring-2 p-1 mb-2 ${
      isDark ? 'bg-slate-800 ring-blue-400' : 'bg-red-400 ring-red-700'
    }
    `}
    checked={isDark}
    onChange={toggleDarkMode}
    size={40}
    moonColor="royalblue"
    sunColor="red"
  />
  );
};

export default LightAndNightToggleButtonView;