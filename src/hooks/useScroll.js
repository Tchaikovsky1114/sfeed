import { useEffect, useRef, useState } from 'react';

const useScroll = (delay) => {
  const [scrollY,setScrollY] = useState()
  const getScrollYValue = useRef(null);

 const storeScrollYValue = () => {
   setScrollY(window.scrollY)
 }

  useEffect(()=>{
    getScrollYValue.current = storeScrollYValue
  },[])

  useEffect(()=>{
    const getScrollY = () => {
      getScrollYValue.current()
    }
    let interval = setInterval(getScrollY,delay);
    return () => clearInterval(interval,delay);
  },[delay])

  return scrollY
};

export default useScroll;