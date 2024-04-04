import React, { useState } from "react";
import Cards from "./cards/Cards";
import Upper from "./Upper";

const Pokedex = () => {
  return (
    <>
      <Upper />
      <div className="flex container mx-auto justify-center">
        <div className="sm:grid grid-cols-2 gap-2 lg:grid-cols-4">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Pokedex;
