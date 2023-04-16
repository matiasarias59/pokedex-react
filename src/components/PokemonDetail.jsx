import React from "react";
import EvoChainContainer from "./EvoChainContainer";

export default function PokemonDetail({ props }) {
  const { pokemon } = props;

  return (
    <>
      <div>
        <span>#{pokemon.id}</span>
        <h1>{pokemon?.name}</h1>
        <img
          src={`${pokemon.sprites?.other["official-artwork"].front_default}`}
          alt=''
        />
        <div>
          {pokemon.types?.map((el, i) => (
            <h3 key={i}>{el.type.name}</h3>
          ))}
        </div>
        <p>Peso {pokemon.weight}</p>
        <p>Altura {pokemon.height}</p>
        <EvoChainContainer pokeId={pokemon.id}/>
      </div>
    </>
  );
}
