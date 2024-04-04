import React from "react";
import Cards from "./cards/Cards";
import Upper from "./Upper";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./../redux/modalDetailPokemon";
import ModalDetailPokemon from "./modals/DetailPokemon";

const Home = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleCardClick = () => {
    dispatch(openModal());
  };

  return (
    <>
      <Upper />
      <div className="flex container mx-auto justify-center">
        <div className="sm:grid grid-cols-2 gap-2 lg:grid-cols-4">
          <Cards handleCardClick={handleCardClick} />
          {isModalOpen && <ModalDetailPokemon />}
        </div>
      </div>
    </>
  );
};

export default Home;
