import { configureStore } from "@reduxjs/toolkit";
import modalDetailPokemon from "./modalDetailPokemon";
import modalCatchPokemon from "./modalCatchPokemon";

export default configureStore({
  reducer: {
    modal: modalDetailPokemon,
    modalCatch: modalCatchPokemon,
  },
});
