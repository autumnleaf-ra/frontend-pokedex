import React from "react";
import { useGetPokemonByNameQuery } from "../../redux/apiSlice";

function CardsPokedex({ handleCardClick, pokemon }) {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon);
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
          <div className="flex flex-col">
            <div className="mx-auto">
              <img src="" alt="pohoto" />
            </div>
            <div className="font-semibold"> {data.name} </div>
          </div>
        </div>
      </div>
      {/* </button> */}
    </>
  );
}

export default CardsPokedex;
