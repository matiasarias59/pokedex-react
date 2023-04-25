import React from 'react'

export default function PokeAbilities(props) {
  const {abilities} = props;

  return (
    <div className='pokeAbilities__container'>
      <ul className='pokeAbilities__list'>
      {abilities?.map((el, index)=>{
        return (<li className='pokeAbilities__list__element' key={index}>
          <h3>{el.ability.name}</h3>
        </li>)
      })}
      </ul>
    </div>
  )
}
