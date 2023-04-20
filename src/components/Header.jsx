import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className='header__logo__container'>
            <Link to="/">
            <img className='header__logo__container__img' src="../src/img/logo.png" alt="Logo Pokedex" />
            </Link>
        </div>
        <Navbar/>
    </header>
  )
}
