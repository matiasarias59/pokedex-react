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

  useEffect(() => {
    tabs.forEach((el) => {
      el.isActive = false;
    });
    tabs[0].isActive = true;
    setStateTab([...tabs]);
  }, [tabs]);

  return (
    <div className='tabs__container'>
      <ul className='tab__list'>
        {stateTab.map((el, index) => {
          return (
            <li
              key={index}
              className={`tab__name${el.isActive ? "--active" : ""}`}
              onClick={() => {
                handleClick(el);
              }}
            >
              <h3>{el.title}</h3>
            </li>
          );
        })}
      </ul>
      {stateTab.map((el, index) => {
        return (
          <div
            key={index}
            className={`tab__content${el.isActive ? "--active" : ""}`}
          >
            {el.element}
          </div>
        );
      })}
    </div>
  );
}
