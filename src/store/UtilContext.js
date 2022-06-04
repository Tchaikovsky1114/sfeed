import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UtilContext = createContext({
  currentPageNumber: 0,
  getNewsOnPage: (number) => {},
  increasePageNumber: () => {},
  decreasePageNumber: () => {},
})


const UtilProvider = ({children}) => {
  const [currentPageNumber,setCurrentPageNumber] = useState(1)

  const getNewsOnPage = useCallback((number) =>{

    setCurrentPageNumber(number);
  },[currentPageNumber])
  const increasePageNumber = useCallback(() => {
    setCurrentPageNumber(prev => prev + 1);
  },[currentPageNumber])
  const decreasePageNumber = useCallback(() => {
    setCurrentPageNumber(prev => prev - 1);
  },[currentPageNumber])
 
  const utilContext = {
    getNewsOnPage,
    increasePageNumber,
    decreasePageNumber,
    currentPageNumber,
 
  }
  return <UtilContext.Provider value={utilContext}>{children}</UtilContext.Provider>
}


export default UtilProvider