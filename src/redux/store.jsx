import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonAPI, anotherAPI } from "./apiSlice";
import { modalDetailPokemonReducer } from "./modalDetailPokemon";
import { modalCatchPokemonReducer } from "./modalCatchPokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  modalDetail: modalDetailPokemonReducer,
  modalCatch: modalCatchPokemonReducer,
  [pokemonAPI.reducerPath]: pokemonAPI.reducer,
  [anotherAPI.reducerPath]: anotherAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonAPI.middleware)
      .concat(anotherAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
