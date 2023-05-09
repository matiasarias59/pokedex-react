import React from "react";

export default function Loading() {
  return (
    <div className='loading__container'>
      <div className='loading__container__midline'>
        <div className='loading__container__midline__circle'></div>
      </div>
      <div className='loading__container__red'></div>
    </div>
  );
}
