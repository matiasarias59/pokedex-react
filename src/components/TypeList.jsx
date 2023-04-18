import React from "react";
import { Link } from "react-router-dom";
import TypeIcon from "./TypeIcon";

export default function TypeList({ props }) {
  const { typeList } = props;

  return (
    <ul>
      {typeList.map((el) => {
        return (<li key={el.id}>
          <Link to={`/type/${el.id}`}>
            <h3>
              {el.name}
            </h3>
            <TypeIcon type={el.name}/>
          </Link>
        </li>)
      })}
    </ul>
  );
}
