import type {Pokemon} from "../types/pokemon.ts";

type PokemonCardProp = {
    pokemon: Pokemon,
}
function PokemonCard({pokemon}: PokemonCardProp){

    return (
        <div className="pokemon-card">
            <img
                className="pokemon-avatar"
                src={pokemon.sprites.front_shiny}
                alt=""
                width={100}
            />
            <p>Name: {pokemon.name}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <div>Type(s): {pokemon.types.map((typeObj, slot) => (
                <p key={slot}>{typeObj.type.name}</p>
            ))}</div>
        </div>

    )

}

export default PokemonCard;