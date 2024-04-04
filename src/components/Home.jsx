import React from "react";
import Cards from "./cards/Cards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-center pb-2  bg-amber-600">
        <div className="mt-5 text-xl font-semibold">Welcome to Pokedex</div>
      </div>
      <div className="flex justify-center mt-2 pb-2 space-x-10">
        <Link
          to={"/"}
          className="hover:underline decoration-amber-600 decoration-2"
        >
          {" "}
          Pokemon List
        </Link>
        <Link
          to={"/pokedex"}
          className="hover:underline decoration-amber-600 decoration-2"
        >
          {" "}
          My Pokedex
        </Link>
      </div>
      <div className="flex container mx-auto justify-center">
        <div className="sm:grid grid-cols-2 gap-2 lg:grid-cols-4">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Home;
