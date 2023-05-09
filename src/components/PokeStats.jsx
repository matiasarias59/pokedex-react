import React from "react";

export default function PokeStats(props) {
  const { stats } = props;

  return (
    <div className='pokeStats__container'>
      <ul className='pokeStats__list'>
        {stats?.map((el, index) => {
          return (
            <li className='pokeStats__list__element' key={index}>
              <h3>{el.stat.name}</h3>
              <span>{el.base_stat}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
