import { createContext, useState } from 'react';

const defaultValue = {};

const UserContext = createContext(defaultValue);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('token') || null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
