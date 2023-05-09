import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Pokemon(props) {
  const { pokemon } = props;
  const { setSelectedPoke } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    setSelectedPoke(pokemon);
    navigate(`/pokemon/${id}`);
  };

  return (
    <li
      className='pokeList__element'
      key={pokemon.id}
      onClick={() => handleClick(pokemon.id)}
    >
      <div className='pokeList__element__card'>
        <h2 className='pokeList__element__card__name'>{pokemon.name}</h2>
        <img
          className='pokeList__element__card__img'
          src={`${pokemon.sprites.other["official-artwork"].front_default}`}
          alt=''
        />
      </div>
    </li>
  );
}
