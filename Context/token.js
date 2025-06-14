// userContext.js
import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  const saveUserData = () => {
    const token = localStorage.getItem('userToken');
    setUserData(token);
  };

  return (
    <TokenContext.Provider value={{ userData, saveUserData }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => useContext(TokenContext);
