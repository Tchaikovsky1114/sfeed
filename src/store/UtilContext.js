import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useScroll from "../hooks/useScroll";

export const UtilContext = createContext({
  currentPageNumber: 0,
  getNewsOnPage: (number) => {},
  increasePageNumber: () => {},
  decreasePageNumber: () => {},
})


const UtilProvider = ({children}) => {
  const [currentPageNumber,setCurrentPageNumber] = useState(1)
  const scrollYValue = useScroll(2000)
  const navigate = useNavigate();

  const goToPage = (categories,number) => {
    navigate(`/${categories}?page=${number}`)
  }

  const getScrollYValue = () => {
    window.scrollTo(0,scrollYValue)
  }

  const getNewsOnPage = useCallback((categories,number) =>{

    setCurrentPageNumber(number);
    goToPage(categories,number)
    
  },[currentPageNumber,goToPage,scrollYValue])
  

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