import React from "react";
import { Link } from "react-router-dom";

export default function TypeList({ props }) {
  const { typeList } = props;

  return (
    <ul>
      {typeList.map((el) => {
        return (<li key={el.id}>
          <Link to={`/type/${el.id}`}>
          {el.name}
          </Link>
        </li>)
      })}
    </ul>
  );
}
