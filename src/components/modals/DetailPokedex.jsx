import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalDetailPokedex";
import CatchPokemon from "../modals/CatchPokemon";
import {
  useDeletePokemonMutation,
  useGetPokedexNameQuery,
  useUpdatePokedexNameMutation,
} from "../../redux/apiSlice";

const DetailPokedex = ({ pokemon, type }) => {
  const {
    data: pokedex,
    error: errorPokedex,
    isLoading: isLoadingPokedex,
  } = useGetPokedexNameQuery(pokemon);

  const [isOpen, setIsOpen] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  const [deletePokemon] = useDeletePokemonMutation();
  const [updatePokemon] = useUpdatePokedexNameMutation();
  const pokedexData = pokedex?.data;

  if (isLoadingPokedex) return <div>Loading {pokemon}...</div>;
  if (errorPokedex)
    return (
      <div>
        Error fetching {pokemon}: {errorPokedex.message}
      </div>
    );

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const Fakedata = Math.random() < 0.5;

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleCatchClicked = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleDeletePokemon = () => {
    deletePokemon({ id: pokedexData.id, pokenName: pokedexData.name })
      .then((response) => {
        const res = response.data;
        alert(res.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        handleCloseModal();
        handleCatchClicked();
      });
  };

  const handleNameChange = (e) => {
    setPokemonName(e.target.value);
  };

  const showModalsChangeName = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeNamePokedex = () => {
    updatePokemon({ id: pokedexData.id, pokeName: pokemonName })
      .then((response) => {
        const res = response.data;
        alert(res.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        handleCloseModal();
        handleCatchClicked();
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {isOpen ? (
        <ModalChangeName
          handleNameChange={handleNameChange}
          pokemonName={pokemonName}
          handleChangeNamePokedex={handleChangeNamePokedex}
        />
      ) : (
        <div className="bg-white p-8 rounded-lg z-50 w-full max-w-md">
          <div className="flex flex-row mx-16">
            <h2 className="text-xl text-center font-semibold">
              Pokemon Information
            </h2>
            <button
              className=" bg-red-600 px-1 text-white rounded-full"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          <div className="flex justify-center py-6">
            <div className="flex flex-col">
              <div className="mx-auto">
                {/* <img src={data?.sprites.front_default} alt={data.name} /> */}
              </div>
              <div>Name : {pokedexData.name}</div>
              {/* <div>abbilites: asjdjasjd</div> */}
              <div>Weight : {pokedexData.weight} </div>
              <div>Height : {pokedexData.height}</div>
            </div>
          </div>

          <div className="flex flex-row space-x-5 ml-5">
            <div>
              <button
                className="flex mt-4 px-4 py-2 mx-auto bg-orange-500 rounded"
                onClick={showModalsChangeName}
              >
                Rename Pokemon
              </button>
            </div>
            <div>
              <button
                className="flex mt-4 px-4 py-2 mx-auto bg-red-500 rounded"
                onClick={handleDeletePokemon}
              >
                Delete Pokemon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ModalChangeName = ({
  handleNameChange,
  pokemonName,
  handleChangeNamePokedex,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50 w-full max-w-md">
        <h2 className="text-xl text-center font-semibold">
          Change Name Youre Pokemon ..
        </h2>

        <div className="flex justify-center py-6">
          <div className="flex flex-col">
            <div>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Give new name for pokemon"
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
          onClick={handleChangeNamePokedex}
        >
          Save to Pokedex
        </button>
      </div>
    </div>
  );
};

export default DetailPokedex;
