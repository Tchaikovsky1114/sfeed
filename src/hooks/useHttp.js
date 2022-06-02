import React, { useCallback } from 'react';
import { useReducer } from 'react';



const httpReducer = (state,action) =>{
  if(action.type === 'SEND'){
    return {
      data: null,
      error: null,
      status: 'pending'
    };
  }
  if(action.type === 'SUCCESS'){
    return {
      data: action.responseData,
      error: null,
      status: 'completed'
    }
  }
  if(action.type === 'ERROR'){
    return{
      data: null,
      error: action.errorMessage,
      status: 'completed'
    }
  }
  return state;
}

const useHttp = (requestFunction,startWithPending = false) => {
  const [httpState,dispatchHttpRequest] = useReducer(httpReducer,{
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  })
  const sendRequest = useCallback(async function () {

      dispatchHttpRequest({type: 'SEND'});
      try{
        const responseData = await requestFunction();
        dispatchHttpRequest({type: 'SUCCESS', responseData});
      }catch (error) {
        dispatchHttpRequest({
          type: 'ERROR',
          errorMessage: error.message || 'you got the error'
        })
        console.log('responseData error');
      }
    },[requestFunction]
  )
  return {
    sendRequest,
    ...httpState
  }
};

export default useHttp;