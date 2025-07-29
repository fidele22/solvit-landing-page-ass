import { createContext, useContext } from 'react';

const UserLoggedInProvider = createContext();

export const UserLogInProvider = ({ children }) => {

  const userLogin = [{
    name: 'Admin',
    email: 'admin@ihuza.com',
    role: 'Admin',
    status:'Active',
    lastLogin:'26 minutes ago'
  }];

  


  return (
    <UserLoggedInProvider.Provider value={{userLogin}}>
      {children}
    </UserLoggedInProvider.Provider>
  );
};

export const useLogin = () => useContext(UserLoggedInProvider);
