import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './features/counter'
import themeReducer from './features/theme'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
export default store
