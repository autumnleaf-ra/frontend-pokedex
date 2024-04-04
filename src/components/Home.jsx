import React from "react";
import Cards from "./cards/Cards";
import Upper from "./Upper";

const Home = () => {
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

export default Home;
