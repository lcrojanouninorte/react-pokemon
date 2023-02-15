import { useState } from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import PokemonCards from "./components/PokemonCards/PokemonCards";
import s from "./styles.module.css";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const onPokemonItemClick = (pokemon) => {
    setCurrentPokemon(pokemon);
  };

  const onAddBtnClick = () => {
    //limit to 5 pokemons

    let pokemons = [...selectedPokemons];
    pokemons[pokemons.length % 5] = currentPokemon;

    // Set state
    setSelectedPokemons(pokemons);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pokemon team</h1>
      <div className={s.container}>
        <div>
        <button onClick={onAddBtnClick}>
            Add {currentPokemon.name} to your team
          </button>
          <div className={s.card}>
            <PokemonList
              pokemon={currentPokemon}
              onPokemonItemClick={onPokemonItemClick}
            />
          </div>

        
        </div>

        <div >
          <p>Your team: {selectedPokemons.length}</p>
          <div className={s.card}>
             <PokemonCards selectedPokemons={selectedPokemons} />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
