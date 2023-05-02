import React from 'react'
import { Link } from 'react-router-dom'

export default function PokeNotFound() {
  return (
    <div className="notFound__container">
    <p>Oops.. Parece que no hay nada por aqui</p>
    <img src="../src/img/not-found.png" alt="" />
    <Link to={"/"}>
        <div className='notFound__btn'>Ir al Inicio</div>
    </Link>
    </div>
  )
}
