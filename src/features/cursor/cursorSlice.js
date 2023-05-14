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
      state.cursorVariant = 'text';
    },
    setCursorStyle: (state, action) => {
      state.cursorVariant = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { makeCursorDefault, textEnter, setCursorStyle } = cursorSlice.actions

export default cursorSlice.reducer