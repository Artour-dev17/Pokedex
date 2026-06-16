
export async function getPokemon(pokemonName: string){
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    return data.json();
}