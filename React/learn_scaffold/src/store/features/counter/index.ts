import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

export interface CounterState {
  counter: number
  status: string
}

const initialState: CounterState = {
  counter: 666,
  status: 'reject',
}

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1)
    }, 2000)
  })
}

export const incrementAsync = createAsyncThunk('counter/fetchCount', async () => {
  const response = await sleep()
  return response
})

const counterSlice = createSlice({
  name: 'counter', 
  initialState,
  reducers: {
    addNumber: (state) => {
      state.counter += 1
    },
    subNumber: (state) => {
      state.counter -= 1
    },
    changeNumber: (state, action: PayloadAction<number>) => {
      state.counter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'pedding'
      })
      .addCase(incrementAsync.fulfilled, (state) => {
        state.status = 'fulfilled'
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'reject'
      })
  },
})

export const { addNumber, subNumber, changeNumber } = counterSlice.actions
export default counterSlice.reducer
