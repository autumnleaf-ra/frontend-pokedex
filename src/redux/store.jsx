import { configureStore } from "@reduxjs/toolkit";
import modalDetailPokemon from "./modalDetailPokemon";

export default configureStore({
  reducer: {
    modal: modalDetailPokemon,
  },
});
