import React, { useState, useEffect } from "react";
import EvoChain from "./EvoChain";

export default function EvoChainContainer(props) {
  const { pokeId } = props;
  const [chain, setChain] = useState();

  const getEvolutionChainUrl = async (id) => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      if (res.ok) {
        const data = await res.json();
        const chainUrl = data.evolution_chain.url;
        return chainUrl;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEvolutionChain = async (url) => {
    try {
      const arrChain = [];

      const res = await fetch(url);
      const data = await res.json();
      const chain = data.chain;
      getNextEvolution(arrChain, chain);

      return arrChain;
    } catch (error) {
      console.log(error);
    }
  };

  const getNextEvolution = (arr, chain) => {
    if (chain.evolves_to.length) {
      arr.push(chain.species);
      getNextEvolution(arr, chain.evolves_to[0]);
    } else {
      arr.push(chain.species);
    }
  };

  const getPokemonsChainIds = async (arr) => {
    const arrIds = await Promise.all(
      arr.map(async (el) => {
        const res = await fetch(el.url);
        const data = await res.json();
        return data.id;
      })
    );
    return arrIds;
  };

  const getPokemonsById = async (idsArr) => {
    const pokemons = await Promise.all(
      idsArr.map(async (el) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${el}`);
        const data = await res.json();
        const pokemon = {
          id: data.id,
          name: data.name,
          sprites: data.sprites,
        };
        return pokemon;
      })
    );
    return pokemons;
  };

  const setEvolutionChain = async (id) => {
    const url = await getEvolutionChainUrl(id);
    const chain = await getEvolutionChain(url);
    const ids = await getPokemonsChainIds(chain);
    setChain(await getPokemonsById(ids));
  };

  useEffect(() => {
    pokeId && setEvolutionChain(pokeId);
  }, [pokeId]);

  return (
    <div>
      EvoChainContainer
      {chain?.length && <EvoChain pokemons={chain} />}
    </div>
  );
}
