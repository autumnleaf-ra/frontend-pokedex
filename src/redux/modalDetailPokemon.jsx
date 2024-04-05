import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  type: null,
};

const modalDetailPokemonSlice = createSlice({
  name: "modalDetail",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.type = action.payload.type;
      state.selectedPokemon = action.payload.pokemon;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.type = null;
      state.selectedPokemon = null;
    },
  },
});

export const { openModal, closeModal } = modalDetailPokemonSlice.actions;
export const modalDetailPokemonReducer = modalDetailPokemonSlice.reducer;