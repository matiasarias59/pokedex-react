import React from "react";

export default function HomePage() {
  return (
    <div className='homePage__container'>
      <section>
        <h2>¡Bienvenido!</h2>
        <p>Te presentamos la Pokedex</p>
        <p>
          Puedes buscar tu pokemon favorito escribiendo su nombre o su número de
          pokedex
        </p>
      </section>
      <div className='homePage__img__container'>
        <img src='../src/img/home-pic.png' alt='' />
      </div>
    </div>
  );
}
