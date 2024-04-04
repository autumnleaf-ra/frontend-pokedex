import React from "react";

const CatchPokemon = ({ handleCatchClicked, Fakedata }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50 w-full max-w-md">
        {Fakedata ? (
          <>
            <h2 className="text-xl text-center font-semibold">
              Congratulations ! You got Pokemon !
            </h2>

            <div className="flex justify-center py-6">
              <div className="flex flex-col">
                <div>
                  <input
                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Give a name for pokemon"
                    type="text"
                    name="search"
                  />
                </div>
              </div>
            </div>
            <button
              className="flex mt-4 px-4 py-2 mx-auto bg-blue-500 rounded"
              onClick={handleCatchClicked}
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
