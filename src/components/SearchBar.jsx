import React from "react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target[0].value;

    navigate(`/search/?q=${query}`);
    e.target.reset();
  };
  return (
    <div className="searchBar__container">
      <form className="searchBar__form" onSubmit={(e) => handleSearch(e)} action=''>
        <input
          type='text'
          name='q'
          id=''
          placeholder='Nombre o n° de Pokemon'
        />
        <button type='submit'>Go</button>
      </form>
    </div>
  );
}
