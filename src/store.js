import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './features/cursor/cursorSlice'

import globalStatesSlice from './features/cursor/globalStatesSlice'

export default configureStore({
  reducer: {
    cursor: cursorReducer,
    globalStates: globalStatesSlice
  }
})