import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalDetailPokedex";
import CatchPokemon from "../modals/CatchPokemon";
import {
  useCatchPokemonMutation,
  useDeletePokemonMutation,
  useGetPokedexNameQuery,
  useGetPokemonByNameQuery,
  useUpdatePokedexNameMutation,
} from "../../redux/apiSlice";

const DetailPokedex = ({ pokemon, type }) => {
  const {
    data: pokedex,
    error: errorPokedex,
    isLoading: isLoadingPokedex,
  } = useGetPokedexNameQuery(pokemon);

  const [statusCatch, setStatusCatch] = useState();
  const [dataIdPokemon, setDataIdPokemon] = useState(0);
  const [idPokemon, setIdPokemon] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemonName, setPokemonName] = useState("");

  const [deletePokemon] = useDeletePokemonMutation();
  const [catchPokemon] = useCatchPokemonMutation();
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

  const handleCatch = () => {
    catchPokemon({ id: pokedex.id })
      .then((response) => {
        const res = response.data;
        const pokemonData = res.pokemon;
        let idPokemon = 0;
        if (pokemonData !== undefined) {
          idPokemon = pokemonData.id;
        }
        setDataIdPokemon(idPokemon);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        handleCatchClicked(statusCatch, idPokemon);
        setLoading(false);
      });
  };

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

  const handleChangeNamePokedex = () => {
    updatePokemon({ id: pokedexData.id, pokenName: pokedexData.name })
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
              onClick={handleChangeNamePokedex}
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
    </div>
  );
};

export default DetailPokedex;
