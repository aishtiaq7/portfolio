import { createSlice } from "@reduxjs/toolkit";

export const globalStatesSlice = createSlice({
  name: "globalStates",
  initialState: {
    modalIsOpen: false,
    modalContent: {
      title: '',
      descriontion: '', 
      tech: '',
      hyperlink: "", 
    },
    screenWidth: 500,
    screenOffsetY: 0,
  },
  reducers: {
    updateScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    setModalContent: (state, action) => {
      const { title, descriontion, tech, hyperlink} = action.payload;
      state.modalContent = {
        title: title,
        descriontion: descriontion,
        tech: tech,
        hyperlink: hyperlink,
      };
    },
    setWindowOffsetY: (state, action) =>{
      state.screenOffsetY = action.payload;
    }
  },
});

export const {
  setWindowOffsetY,
  setIsModalOpen,
  setModalContent,
  updateScreenWidth
} = globalStatesSlice.actions;

export default globalStatesSlice.reducer;
