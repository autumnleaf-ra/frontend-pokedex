import React, { useEffect, useState } from "react";
import Cards from "./cards/Cards";
import Upper from "./Upper";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./../redux/modalDetailPokemon";
import ModalDetailPokemon from "./modals/DetailPokemon";
import { useGetAllPokemonQuery } from "../redux/apiSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data: pokemon, isLoading } = useGetAllPokemonQuery();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const isModalOpen = useSelector((state) => state.modalDetail.isModalOpen);
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    if (!isLoading && pokemon && pokemon.results) {
      const names = pokemon.results.map((pokemon) => ({
        name: pokemon.name,
      }));
      setPokemonNames(names);
    }
  }, [isLoading, pokemon]);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon.name);
    dispatch(openModal());
  };

  return (
    <>
      <Upper />
      <div className="flex container mx-auto justify-center">
        <div className="sm:grid grid-cols-2 gap-2 lg:grid-cols-3">
          {pokemonNames.map((pokemon) => (
            <Cards
              handleCardClick={() => handleCardClick(pokemon)}
              key={pokemon.name}
              pokemon={pokemon.name}
            />
          ))}
          {isModalOpen && <ModalDetailPokemon pokemon={selectedPokemon} />}
        </div>
      </div>
    </>
  );
};

export default Home;
