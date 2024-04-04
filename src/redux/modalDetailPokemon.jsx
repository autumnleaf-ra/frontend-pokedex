import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const modalDetailPokemonSlice = createSlice({
  name: "modalDetail",
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

export const { openModal, closeModal } = modalDetailPokemonSlice.actions;
export const modalDetailPokemonReducer = modalDetailPokemonSlice.reducer;
