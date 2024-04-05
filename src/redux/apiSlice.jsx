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

export const pokedexesAPI = createApi({
  reducerPath: "pokedexesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fictional-umbrella-6j57rwr67wjh5pj6-3000.app.github.dev/",
  }),
  endpoints: (builder) => ({
    getAllPokedex: builder.query({
      query: () => "/pokedexes",
    }),
    catchPokemon: builder.mutation({
      query: ({ pokename }) => ({
        url: `/pokemon/catch/${pokename}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonAPI;
export const { useGetAllPokedexQuery, useCatchPokemonMutation } = pokedexesAPI;
