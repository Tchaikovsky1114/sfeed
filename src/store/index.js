import {createSlice} from '@reduxjs/toolkit'


const initialState = {counter: 0, showCounter: true}

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      // state mutate : initialstate is this state
      state.counter ++;
    },
    decrement(state) {
      state.counter --;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
})