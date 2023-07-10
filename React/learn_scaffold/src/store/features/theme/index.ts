import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  color: string
}

const initialState: ThemeState = {
  color: 'pink',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeColor: () => {},
  },
})

export const { changeColor } = themeSlice.actions
export default themeSlice.reducer
