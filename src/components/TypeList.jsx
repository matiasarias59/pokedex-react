import React, {useState} from "react";
import { Link } from "react-router-dom";
import TypeIcon from "./TypeIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TypeList({ props }) {
  const { typeList } = props;
  const [menuIsActive, setMenuIsActive] = useState(false);
  
  const handleClick = () => {
    setMenuIsActive(!menuIsActive)
  }

  return (
    <div className="typeList__container">
      <div className="typeList__title"  onClick={(()=>handleClick())}>
      <span>Tipos</span>
      <FontAwesomeIcon className={`typeList__title__icon${menuIsActive?"--active":""}`} icon={faCaretRight}  />
      </div>
      <ul className={`typeList__list${menuIsActive?"--active":""}`}>
        {typeList.map((el) => {
          if (el.pokemon.length) {
            return (
              <li className="typeList__list__element" key={el.id} onClick={((e)=>handleClick(e))}>
                <Link to={`/type/${el.id}`}>
                  <h3 className="typeList__list__element__name">{el.name}</h3>
                  <TypeIcon type={el.name} size={"l"}/>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
