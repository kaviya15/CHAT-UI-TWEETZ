

import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null); // Existing user ID state
  const [userName, setUserName] = useState(null); // Existing user ID state
  const [globalRefresh, setGlobalRefresh] = useState(false); // Shared state for triggering updates

  const triggerGlobalRefresh = () => {
    setGlobalRefresh((prev) => !prev); // Toggle the state to trigger useEffect in components
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        userName,
        setUserName,
        globalRefresh,
        setUserId,
        triggerGlobalRefresh,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

