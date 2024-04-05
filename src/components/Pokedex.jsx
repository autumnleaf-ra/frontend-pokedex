import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./../redux/modalDetailPokedex";
import CardsPokedex from "./cards/CardsPokedex";
import Upper from "./Upper";
import { useGetAllPokedexQuery } from "../redux/apiSlice";
import ModalDetailPokedex from "./modals/DetailPokedex";

const Pokedex = () => {
  const dispatch = useDispatch();
  const { data: pokemon, isLoading } = useGetAllPokedexQuery();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const isModalOpen = useSelector(
    (state) => state.modalDetailPokedex.isModalOpen
  );
  const [pokemonNames, setPokemonNames] = useState([]);
  const namePage = "pokedex";

  useEffect(() => {
    if (!isLoading && pokemon) {
      const names = pokemon.map((pokemon) => ({
        name: pokemon.name,
      }));
      setPokemonNames(names);
    }
  }, [isLoading, pokemon]);

  const handleCardClick = (pokemon, namePage) => {
    setSelectedPokemon(pokemon.name);
    dispatch(openModal({ pokemon: pokemon.name, type: namePage }));
  };

  return (
    <>
      <Upper />
      <div className="flex container mx-auto justify-center">
        <div className="sm:grid grid-cols-2 gap-2 lg:grid-cols-4">
          {pokemonNames.map((pokemon, index) => (
            <CardsPokedex
              handleCardClick={() => handleCardClick(pokemon, namePage)}
              key={index}
              pokemon={pokemon.name}
            />
          ))}
          {isModalOpen && (
            <ModalDetailPokedex pokemon={selectedPokemon} type={namePage} />
          )}
        </div>
      </div>
    </>
  );
};

// const Pokedex = () => {
//   const { data: pokemon, isLoading } = useGetAllPokedexQuery();
//   const [pokemonNames, setPokemonNames] = useState([]);

//   useEffect(() => {
//     if (!isLoading && pokemon) {
//       const names = pokemon.map((pokemon) => ({
//         name: pokemon.name,
//       }));
//       setPokemonNames(names);
//     }
//   }, [isLoading, pokemon]);

//   console.log(pokemonNames);
// };

export default Pokedex;
