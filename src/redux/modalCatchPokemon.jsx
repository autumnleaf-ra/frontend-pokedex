import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const modalCatchPokemon = createSlice({
  name: "modalCatch",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalCatchPokemon.actions;
export default modalCatchPokemon.reducer;
