import React from "react";

function Cards({ handleCardClick }) {
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
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                alt="photos"
              />
            </div>
            <div>name : askdkas</div>
            <div>abbilites: asjdjasjd</div>
            <div>height : 91293921</div>
          </div>
        </div>
      </div>
      {/* </button> */}
    </>
  );
}

export default Cards;
