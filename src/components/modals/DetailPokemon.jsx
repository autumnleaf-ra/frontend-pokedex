import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalDetailPokemon";
import CatchPokemon from "../modals/CatchPokemon";
import { useGetPokemonByNameQuery } from "../../redux/apiSlice";

const DetailPokemon = ({ pokemon }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon);
  if (isLoading) return <div>Loading {pokemon}...</div>;
  if (error)
    return (
      <div>
        Error fetching {pokemon}: {error.message}
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
              <img src={data?.sprites.front_default} alt={data.name} />
            </div>
            <div>Name : {data.name}</div>
            {/* <div>abbilites: asjdjasjd</div> */}
            <div>Weight : {data.weight} </div>
            <div>Height : {data.height}</div>
          </div>
        </div>
        <button
          className="flex mt-4 px-4 py-2 mx-auto bg-orange-500 rounded"
          onClick={handleCatchClicked}
        >
          Catch Pokemon
        </button>
        {open && (
          <CatchPokemon
            handleCatchClicked={handleCatchClicked}
            Fakedata={Fakedata}
          />
        )}
      </div>
    </div>
  );
};

export default DetailPokemon;
