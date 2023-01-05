import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1; 
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, valor) => {
      console.log(valor.payload);
      state.counter += valor.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
