import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const [actAnim, setActAnim] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    setActAnim(!actAnim);

    setTimeout(() => {
      navigate('/pokemon')
      
    }, 600);

  };
  

  return (
    <div className='HomeScreen'>
      <div className={`HomeScreen__top${actAnim?'--animate':''}`}>
        <div className='HomeScreen__top__red'></div>

        <div className='HomeScreen__circle ' onClick={handleOnClick}>
          <div className='HomeScreen__circle__inside'></div>
        </div>
      </div>
      <div className={`HomeScreen__bot${actAnim?'--animate':''}`}>
        <div className='HomeScreen__bot__black'></div>
        <div className='HomeScreen__bot__white'></div>
      </div>
    </div>
  );
}

/* Usar useEfect para aplicar la animacion en el desmontaje. 
  Al onclick agregarle un link a la homepage.
*/

