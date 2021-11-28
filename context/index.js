import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const ContextProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [userSecret, setUserSecret] = useState("");
  const value = {
    userName,
    setUserName,
    userSecret,
    setUserSecret,
  };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
