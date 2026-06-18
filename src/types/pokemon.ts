export type Pokemon = {
    name: string;
    height: number;
    weight: number;
    sprites: {
        other: {
            "official-artwork": {
                "front_default": string;
            };
        };
    };
    types: PokemonType[];
}

type PokemonType = {
    slot: number,
    type: {
        name: string
    }
}

