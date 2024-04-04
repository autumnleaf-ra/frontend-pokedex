import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalDetailPokemon";

const DetailPokemon = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={handleCloseModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default DetailPokemon;
