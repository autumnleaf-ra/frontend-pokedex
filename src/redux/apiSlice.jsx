import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonAPI = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => "pokemon",
    }),
  }),
});

export const { useGetAllPokemonQuery } = pokemonAPI;
