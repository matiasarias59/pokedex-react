import React from 'react'

export default function Menu() {
  return (
    <div>
      <h1>Bienvenido a la pokedex</h1>
      <h2>Busca tu pokemon</h2>
      <form action="">
        <input style={{border:'1px solid black'}}type="text" name="" id="" placeholder='nombre o n° de pokemon'/>
        <button type="submit">Go</button>
      </form>
      <h2>O puedes ver todos los de alguna region o tipo en especifico</h2>
      <div>
      <h3>Regiones</h3>
      <ul>
        <li>Lista de regiones</li>
      </ul>
      </div>
      <div>
      <h3>Tipos</h3>
      <ul>
        <li>Lista de Tipos</li>
      </ul>
      </div>
    </div>
  )
}
