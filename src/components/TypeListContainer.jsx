import React, { useState, useEffect } from "react";
import TypeList from "./TypeList";

export default function TypeListContainer() {
  const [typeList, setTypeList] = useState([]);
  const urlTypes = "https://pokeapi.co/api/v2/type/";

  const getTypeList = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const list = data.results;
      const types = await Promise.all(
        list.map(async (el) => {
          return await getTypeData(el.url);
        })
      );
      setTypeList(types);
     // console.log(types);
    } catch (error) {
      console.log(error);
    }
  }

  const getTypeData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
     // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTypeList(urlTypes);
  }, []);

  return (
    <>
      <h2>Tipos</h2>
      <TypeList props={{ typeList }} />
    </>
  );
}
