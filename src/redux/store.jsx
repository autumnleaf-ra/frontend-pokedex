import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonAPI } from "./apiSlice";
import { modalDetailPokemonReducer } from "./modalDetailPokemon"; // Change the import to use named export
import { modalCatchPokemonReducer } from "./modalCatchPokemon"; // Change the import to use named export
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  modalDetail: modalDetailPokemonReducer, // Use the imported named export
  modalCatch: modalCatchPokemonReducer, // Use the imported named export
  [pokemonAPI.reducerPath]: pokemonAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
