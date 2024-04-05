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
  entityTypes: ["Pokedex"],
  endpoints: (builder) => ({
    getAllPokedex: builder.query({
      query: () => "/pokedexes",
      providesTags: ["Pokedex"],
    }),
    catchPokemon: builder.mutation({
      query: ({ pokename }) => ({
        url: `/pokemon/catch/${pokename}`,
        method: "POST",
      }),
      invalidatesTags: ["Pokedex"],
    }),
    updatePokemonCatch: builder.mutation({
      query: ({ id, pokeName }) => ({
        url: `pokemon/update/${id}`,
        method: "PATCH",
        body: { name: pokeName },
      }),
      invalidatesTags: ["Pokedex"],
    }),
    getPokedexName: builder.query({
      query: (name) => `/pokedexes/${name}`,
    }),
    deletePokemon: builder.mutation({
      query: ({ id, pokenName }) => ({
        url: `pokedexes/release/${id}`,
        method: "DELETE",
        body: { name: pokenName },
      }),
      invalidatesTags: ["Pokedex"],
    }),
    updatePokedexName: builder.mutation({
      query: ({ id, pokeName }) => ({
        url: `/pokedexes/rename/${id}`,
        method: "PATCH",
        body: { name: pokeName },
      }),
      invalidatesTags: ["Pokedex"],
    }),
  }),
});

export const { useGetAllPokemonQuery, useGetPokemonByNameQuery } = pokemonAPI;
export const {
  useGetAllPokedexQuery,
  useCatchPokemonMutation,
  useUpdatePokemonCatchMutation,
  useGetPokedexNameQuery,
  useDeletePokemonMutation,
  useUpdatePokedexNameMutation,
} = pokedexesAPI;
