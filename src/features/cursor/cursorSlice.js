import { createSlice } from "@reduxjs/toolkit";

export const cursorSlice = createSlice({
  name: "cursor",
  initialState: {
    cursorVariant: "default",
    cursorPosition: {
      x: 0,
      y: 0,
    },
  },
  reducers: {
    makeCursorDefault: (state, action) => {
      state.cursorVariant = "default";
    },
    textEnter: (state) => {
      state.cursorVariant = "text";
    },
    setCursorStyle: (state, action) => {
      state.cursorVariant = action.payload;
      // console.log('action.payload:' ,action.payload);
    },
    updateCursorPosition: (state, action) => {
      const { x, y } = action.payload;
      state.cursorPosition = {
        x: x,
        y: y,
      };
    },
  },
});

export const {
  makeCursorDefault,
  textEnter,
  setCursorStyle,
  updateCursorPosition,
} = cursorSlice.actions;

export default cursorSlice.reducer;
