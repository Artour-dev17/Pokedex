import './App.css'
import SearchForm from "./components/SearchForm.tsx";
import {getPokemon} from "./services/pokemonApi.ts";

function App() {

  const  handlePokemonSearch = async (pokemonName: string) => {
    const answer = await getPokemon(pokemonName);

    console.log(answer);
  }

  return (

    <div>
    <h2>Pokedex</h2>

    <SearchForm onSearch={handlePokemonSearch} />
    </div>
  )
}

export default App
