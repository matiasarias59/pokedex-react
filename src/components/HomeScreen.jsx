import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";

export default function HomeScreen() {
  const [actAnim, setActAnim] = useState(false);
  const [home, setHome] = useState(false);

  const navigate = useNavigate();

  const handleOnClick = () => {
    setActAnim(!actAnim);

    setTimeout(() => {
      //navigate('/pokemon')
      setHome(true);
    }, 600);

  };
  
  const handleOnScroll = (e) => {
    console.log(e)
  }

  useEffect(() => {
    console.log(window)
  /* 
    return () => {
      second
    } */
}, [])
  

  return (
    !home?(
    <div className='HomeScreen' onScrollCapture={(e)=>handleOnScroll(e)}>
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
    </div>):<HomePage/>
  );
}

/* Usar useEfect para aplicar la animacion en el desmontaje. 
  Al onclick agregarle un link a la homepage.
*/

