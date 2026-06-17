import './App.css'
import SearchForm from "./components/SearchForm.tsx";
import {getPokemon} from "./services/pokemonApi.ts";
import {useState} from "react";
import type {Pokemon} from "./types/pokemon.ts";
import PokemonCard from "./components/PokemonCard.tsx";


function App() {

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const  handlePokemonSearch = async (pokemonName: string) => {
    setError("")
    setLoading(true);
    setPokemon(null);
    const answer = await getPokemon(pokemonName);

    if(answer){
      setPokemon(answer);
    } else {
      setPokemon(null);
      setError("Pokemon-not-found, try again");
    }
    setLoading(false);
  }


  return (
    <div>
    <h2>Pokedex</h2>

    <SearchForm onSearch={handlePokemonSearch} />
    {loading && <p>Loading. . .</p>}
    {error && <p>{error}</p>}
    {pokemon && <PokemonCard pokemon={pokemon}/>}



    </div>
  )
}

export default App
