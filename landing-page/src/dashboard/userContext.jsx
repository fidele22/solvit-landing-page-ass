import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // You can fetch this from an API or auth system
  const user = {
    name: 'Admin',
    email: 'admin@ihuza.com',
    role: 'Administrator',
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy use
export const useUser = () => useContext(UserContext);
