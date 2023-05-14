import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './features/cursor/cursorSlice'

export default configureStore({
  reducer: {
    cursor: cursorReducer
  }
})