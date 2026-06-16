export type Pokemon = {
    name: string,
    height: number,
    weight: number,
    sprites: {
        front_shiny: string,
    }
    types: PokemonType[],
}

type PokemonType = {
    slot: number,
    type: {
        name: string
    }
}