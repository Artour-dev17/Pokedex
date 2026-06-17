
export async function getPokemon(pokemonName: string){
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!data.ok){
        return null;
    }
    return data.json();
}