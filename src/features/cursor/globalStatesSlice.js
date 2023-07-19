import { createSlice } from "@reduxjs/toolkit";

export const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: {
    modalIsOpen: false,
    modalContent: {
      title: '',
      descriontion: '', 
      tech: '',
    }
  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    setModalContent: (state, action) => {
      // console.log('action.payload => ', action.payload);
      state.modalContent = action.payload ;
    }
  },
});

export const {
  setIsModalOpen,
  setModalContent,
} = globalStatesSlice.actions;

export default globalStatesSlice.reducer;
