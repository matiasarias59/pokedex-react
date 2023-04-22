import React from "react";
import EvoChainItem from "./EvoChainItem";

export default function EvoChain(props) {
  const { pokemons } = props;

  return (
    <>
      {/* <div>evo chain</div>
      <div> */}
        {pokemons.map((el) => {
          return <EvoChainItem key={el.id} pokemon={el} />;
        })}
      {/* </div> */}
    </>
  );
}
