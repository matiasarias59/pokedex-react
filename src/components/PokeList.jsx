import React from "react";
import Pokemon from "./Pokemon";

export default function PokeList({props}) {
 const {pokeList} = props;


  return (
    <>
    <ul className="pokeList">

      {pokeList.map((el) => {
        return (
          <Pokemon key={el.id} pokemon={el} />
          )})}
          </ul>
    </>
  );
}

