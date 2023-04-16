import React from 'react'

export default function EvoChainItem({pokemon}) {
  return (
    <div>
        <h1>{pokemon.name}</h1>
        <img
          src={`${pokemon.sprites?.other["official-artwork"].front_default}`}
          alt=''
        />
    </div>
  )
}
