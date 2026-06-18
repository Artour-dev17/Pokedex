import type {Pokemon} from "../types/pokemon.ts";

type PokemonCardProp = {
    pokemon: Pokemon,
}
function PokemonCard({pokemon}: PokemonCardProp){

    return (
        <div className="pokemon-card">
            <img
                className="pokemon-avatar"
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt=""
                width={100}
            />
                <h2>{pokemon.name}</h2>
            <div className="pokemon-stats">
                <p>Height: {pokemon.height} ft |</p>
                <p>Weight: {pokemon.weight} pounds |</p>
                <p>Type(s): </p>{pokemon.types.map((typeObj, slot) => (
                <p key={slot}>{typeObj.type.name}</p>
            ))}
            </div>

        </div>

    )

}

export default PokemonCard;