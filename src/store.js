import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './features/counter/cursorSlice'

export default configureStore({
  reducer: {
    counter: cursorReducer
  }
})