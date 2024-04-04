import "./App.css";
import Cards from "./cards/Cards";

function App() {
  return (
    <>
      <div className="flex justify-center pb-2  bg-amber-600">
        <div className="mt-5 text-xl font-semibold">Welcome to Pokedex</div>
      </div>
      <div className="flex justify-center mt-2 pb-2 space-x-10">
        <a
          href="#"
          className="hover:underline decoration-amber-600 decoration-2"
        >
          Pokemon List
        </a>
        <a
          href="#"
          className="hover:underline decoration-amber-600 decoration-2"
        >
          My Pokedex
        </a>
      </div>
      <div className="flex container mx-auto justify-center">
        <div class="sm:grid grid-cols-2 gap-2 lg:grid-cols-4">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
