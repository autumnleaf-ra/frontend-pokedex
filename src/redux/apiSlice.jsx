import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonAPI = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => "pokemon",
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const anotherAPI = createApi({
  reducerPath: "anotherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemonDD: builder.query({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonAPI;
export const { useGetAllPokemonDDQuery } = anotherAPI;
