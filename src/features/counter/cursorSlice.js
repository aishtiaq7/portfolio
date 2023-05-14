import { createSlice } from '@reduxjs/toolkit'

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState: {
    moreData: 'abcd',
    cursorVariant: 'default',
    
  },
  reducers: {
    makeCursorDefault: (state, action)=>{
      state.cursorVariant = 'default';
    },
    textEnter: (state) => {
      state.cursorVariant = 'text'
    }
  }
})

// Action creators are generated for each case reducer function
export const { makeCursorDefault, textEnter } = cursorSlice.actions

export default cursorSlice.reducer