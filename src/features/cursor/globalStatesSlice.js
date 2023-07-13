import { createSlice } from "@reduxjs/toolkit";

export const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: {
    modalIsOpen: false,
  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },
  },
});

export const {
  setIsModalOpen,
} = globalStatesSlice.actions;

export default globalStatesSlice.reducer;
