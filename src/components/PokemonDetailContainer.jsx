import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonDetail from "./PokemonDetail.jsx";
import { AppContext } from "../context/AppContext.js";
import PokeNotFound from "./PokeNotFound.jsx";
export default function PokemonDetailContainer() {
  const { selectedPoke } = useContext(AppContext);
  const { pokeId } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [pokemon, setPokemon] = useState({});

  const GetPokemonById = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (res.ok) {
        const data = await res.json();
        setPokemon(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    selectedPoke?.id ? setPokemon(selectedPoke) : GetPokemonById(pokeId);
  }, [pokeId]);

  return (
    <>{!notFound ? <PokemonDetail props={{ pokemon }} /> : <PokeNotFound />}</>
  );
}
