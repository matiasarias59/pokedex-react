import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function EvoChainItem({ pokemon }) {
  const { setSelectedPoke } = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = (id) => {
    setSelectedPoke(pokemon);
    navigate(`/pokemon/${id}`);
  };

  return (
    <div
      className='EvoChain__item'
      onClick={() => {
        handleClick(pokemon.id);
      }}
    >
      <h3 className='EvoChain__item__name'>{pokemon.name}</h3>
      <div className='EvoChain__item__img__container'>
        <img
          className='EvoChain__item__img'
          src={`${pokemon.sprites?.other["official-artwork"].front_default}`}
          alt={`Foto del pokemon ${pokemon.name}`}
        />
      </div>
    </div>
  );
}
