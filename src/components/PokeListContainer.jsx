import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import Loading from "./Loading";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import PokeNotFound from "./PokeNotFound";

export default function PokeListContainer() {
  const { typeId } = useParams();
  const [searchParams] = useSearchParams();
  const [pokeList, setPokeList] = useState([]);
  const location = useLocation();
  const [notFound, setNotFound] = useState(false);

  const GetPokemonData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const GetPokemonListByType = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const list = data.pokemon;
      const pokemons = await Promise.all(
        list.map(async (el) => {
          return await GetPokemonData(el.pokemon.url);
        })
      );
      setPokeList(pokemons);
    } catch (error) {
      console.log(error);
    }
  };

  const GetPokemonBySearch = async (query) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      if (res.ok) {
        const data = await res.json();
        setPokeList([data]);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeId) {
      GetPokemonListByType(`https://pokeapi.co/api/v2/type/${typeId}`);
    }
  }, [typeId]);

  useEffect(() => {
    setPokeList([]);
    setNotFound(false);
    const q = searchParams.get("q");
    q && GetPokemonBySearch(q);
  }, [location]);

  return (
    <div className='pokeList__container'>
      {notFound ? (
        <PokeNotFound />
      ) : pokeList.length ? (
        <PokeList props={{ pokeList }} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
