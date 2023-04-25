import React from "react";
import EvoChainContainer from "./EvoChainContainer";
import TabsPokeDetail from "./TabsPokeDetail";
import PokeStats from "./PokeStats";
import PokeAbilities from "./PokeAbilities";
import TypeIcon from "./TypeIcon";

export default function PokemonDetail({ props }) {
  const { pokemon } = props;
  const tabs = [
    {
      title: "Stats",
      element: <PokeStats stats={pokemon.stats} />,
    },
    {
      title: "Habilidades",
      element: <PokeAbilities />,
    },
    {
      title: "Evoluciones",
      element: <EvoChainContainer pokeId={pokemon.id} />,
    },
  ];

  return (
    <div className='poke__detail__container'>
      <div className='poke__detail__id'>
        <span>#{pokemon.id}</span>
      </div>
      <h2 className='poke__detail__name'>{pokemon?.name}</h2>
      <img
        className='poke__detail__img'
        src={`${pokemon.sprites?.other["official-artwork"].front_default}`}
        alt=''
      />
      <div className='poke__detail__types'>
        {pokemon.types?.map((el, i) => (
          <div className='poke__detail__types__container' key={i}>
            <h3 className='poke__detail__types__name'>{el.type.name}</h3>
            <TypeIcon type={el.type.name} size={"s"} />
          </div>
        ))}
      </div>
      <div className='poke__detail__specs'>
        <div>
        <p>PESO</p>
        <span>
          {pokemon.weight}
        </span>
        </div>
        <div>
        <p>ALTURA</p>
        <span>
          {pokemon.height}
        </span>
        </div>
      </div>
      <TabsPokeDetail props={{ tabs }} />
    </div>
  );
}
