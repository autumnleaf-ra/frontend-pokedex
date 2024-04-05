import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonAPI, pokedexesAPI } from "./apiSlice";
import { modalDetailPokemonReducer } from "./modalDetailPokemon";
import { modalCatchPokemonReducer } from "./modalCatchPokemon";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
  modalDetail: modalDetailPokemonReducer,
  modalCatch: modalCatchPokemonReducer,
  [pokemonAPI.reducerPath]: pokemonAPI.reducer,
  [pokedexesAPI.reducerPath]: pokedexesAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pokemonAPI.middleware)
      .concat(pokedexesAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
