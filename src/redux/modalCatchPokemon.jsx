import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const modalCatchPokemonSlice = createSlice({
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

export const { openModal, closeModal } = modalCatchPokemonSlice.actions;
export const modalCatchPokemonReducer = modalCatchPokemonSlice.reducer;
