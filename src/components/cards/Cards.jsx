import React from "react";

function Cards({ handleCardClick }) {
  return (
    <>
      <button>
        <div className="cards w-56">
          <div
            className="flex border justify-center py-6"
            onClick={handleCardClick}
          >
            <div className="flex flex-col space-x-4">
              <div>
                <img src="" alt="photos" />
              </div>
              <div>name : askdkas</div>
              <div>abbilites: asjdjasjd</div>
              <div>height : 91293921</div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

export default Cards;
