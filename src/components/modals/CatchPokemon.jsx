import React, { useEffect, useState } from "react";
import { useUpdatePokemonCatchMutation } from "../../redux/apiSlice";

const CatchPokemon = ({
  handleCatchClicked,
  statusCatch,
  dataIdPokemon,
  handleCloseModal,
}) => {
  const [pokemonName, setPokemonName] = useState("");
  const [updatePokemonCatch] = useUpdatePokemonCatchMutation();

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const handleSavetoPokedex = () => {
    if (
      dataIdPokemon !== undefined &&
      dataIdPokemon !== 0 &&
      pokemonName !== ""
    ) {
      updatePokemonCatch({ id: dataIdPokemon, pokeName: pokemonName })
        .then((response) => {
          const res = response.data;
          alert(res.message);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          handleCatchClicked();
          handleCloseModal();
        });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50 w-full max-w-md">
        {statusCatch ? (
          <>
            <h2 className="text-xl text-center font-semibold">
              Congratulations ! You got Pokemon !
            </h2>

            <div className="flex justify-center py-6">
              <div className="flex flex-col">
                <div>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Give a name for pokemon"
                    type="text"
                    name="name"
                    value={pokemonName}
                    onChange={handleNameChange}
                  />
                </div>
              </div>
            </div>
            <button
              className="flex mt-4 px-4 py-2 mx-auto bg-blue-500 rounded"
              onClick={handleSavetoPokedex}
            >
              Save to Pokedex
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl text-center font-semibold">
              Pokemon goes out a way !!
            </h2>

            <button
              className="flex mt-4 px-4 py-2 mx-auto bg-red-500 rounded"
              onClick={handleCatchClicked}
            >
              Try to catch again !
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CatchPokemon;
