import React from "react";
import EvoChainItem from "./EvoChainItem";

export default function EvoChain(props) {
  const { pokemons } = props;

  return (
    <>
      {pokemons.map((el) => {
        return <EvoChainItem key={el.id} pokemon={el} />;
      })}
    </>
  );
}
