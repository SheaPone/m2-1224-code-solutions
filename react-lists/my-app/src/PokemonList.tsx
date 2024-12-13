type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  return pokedex.map((pokemon) => <li key={pokemon.number}>{pokemon.name}</li>);
}
