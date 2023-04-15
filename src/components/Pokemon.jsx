import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext} from '../context/AppContext';


export default function Pokemon(props) {

  const {pokemon} = props;
  const {setSelectedPoke} = useContext(AppContext);

  const navigate = useNavigate();

  const handleClick = (id) => {
    setSelectedPoke(pokemon); 
   navigate(`/pokemon/${id}`);
  }


  return (
    <div key={pokemon.id} onClick={()=>handleClick(pokemon.id)}>
      <h2>{pokemon.name}</h2>
      <img
        src={`${pokemon.sprites.other["official-artwork"].front_default}`}
        alt=''
      />
    </div>
  );
}
