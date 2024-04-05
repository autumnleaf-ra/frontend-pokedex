import React from "react";
import {
  useGetPokedexNameQuery,
  useGetPokemonByNameQuery,
} from "../../redux/apiSlice";

function CardsPokedex({ handleCardClick, pokemon }) {
  const { data: pokedex, error, isLoading } = useGetPokedexNameQuery(pokemon);
  const pokeData = pokedex?.data;
  if (isLoading) return <div>Loading {pokemon}...</div>;
  if (error)
    return (
      <div>
        Error fetching {pokemon}: {error.message}
      </div>
    );

  return (
    <>
      {/* <button> */}
      <div className="cards w-56">
        <div
          className="flex border justify-center py-6 rounded-lg bg-blue-700 bg-opacity-60"
          onClick={handleCardClick}
        >
          <>
            <div className="flex flex-col">
              <div className="mx-auto">
                <img src={pokeData?.image} alt={pokeData.name} />
              </div>
              <div className="font-semibold"> {pokeData.pokemon_name} </div>
            </div>
          </>
        </div>
      </div>
      {/* </button> */}
    </>
  );
}

export default CardsPokedex;
