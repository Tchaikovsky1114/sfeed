import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  const {pathname,search} = useLocation()
  
  return {pathname,search}
};

export default useQuery;