import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [selectedPoke, setSelectedPoke] = useState();

  return (
    <AppContext.Provider value={{ selectedPoke, setSelectedPoke }}>
      {props.children}
    </AppContext.Provider>
  );
};
