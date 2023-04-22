import React, { useState, useEffect } from "react";

export default function TabsPokeDetail({ props }) {

  const { tabs } = props;
  const [stateTab, setStateTab] = useState([]);

  const handleClick = (el) => {
    stateTab.forEach((el) => {
      el.isActive = false;
    });
    el.isActive = true;
    setStateTab([...stateTab]);

  };

  useEffect(()=>{

      tabs.forEach((el) => {
          el.isActive = false;
        });
        tabs[0].isActive = true;
        setStateTab([...tabs])
        
    },[tabs])
  return (
    <div className='tabs__container'>
      {stateTab.map((el, index) => {
        return (
          <section key={index} className='tab'>
            <div
              className='tab__name'
              onClick={() => {
                handleClick(el);
              }}
            >
              <h3>{el.title}</h3>
            </div>
            <div className={`tab__content${el.isActive ? "--active" : ""}`}>
              {el.element}
            </div>
          </section>
        );
      })}
    </div>
  );
}
