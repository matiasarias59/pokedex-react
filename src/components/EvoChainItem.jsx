import React from 'react'

export default function EvoChainItem({pokemon}) {
  return (
    <div className="EvoChain__item">
        <h3 className="EvoChain__item__name">{pokemon.name}</h3>
        <div className="EvoChain__item__img__container">
          
        <img
          className="EvoChain__item__img"
          src={`${pokemon.sprites?.other["official-artwork"].front_default}`}
          alt={`Foto del pokemon ${pokemon.name}`}
          />
          </div>
    </div>
  )
}
