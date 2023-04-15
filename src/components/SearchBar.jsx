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
    <div>
      <form onSubmit={(e) => handleSearch(e)} action=''>
        <input
          style={{ border: "1px solid black" }}
          type='text'
          name='q'
          id=''
          placeholder='nombre o n° de pokemon'
        />
        <button type='submit'>Go</button>
      </form>
    </div>
  );
}
