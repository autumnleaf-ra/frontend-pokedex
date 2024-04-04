import React, { useState } from "react";
import Cards from "./cards/Cards";
import Upper from "./Upper";
import Modal from "./modals/DetailPokemon";

const Pokedex = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Upper />
      <div className="flex container mx-auto justify-center">
        <div className="sm:grid grid-cols-2 gap-2 lg:grid-cols-4">
          <Cards handleCardClick={handleCardClick} />
          {isModalOpen && <Modal handleCloseModal={handleCloseModal} />}
        </div>
      </div>
    </>
  );
};

export default Pokedex;
