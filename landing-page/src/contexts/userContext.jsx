import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Load user from local storage on initial render
    const storedUser = localStorage.getItem('ihuza_loggedInUser');
    if (storedUser) {
      try {
        setLoggedInUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data', error);
        localStorage.removeItem('ihuza_loggedInUser');
      }
    }
  }, []);


  const users = [{
    name: 'Admin',
    email: 'admin@ihuza.com',
    role: 'Admin',
    status:'Active',
    lastLogin:'26 minutes ago',
    password:"1234"
  }, 
   { name: 'Jhon',
    email: 'jhon@ihuza.com',
    role: 'receptionist',
    status:'Active',
    lastLogin:'23 minutes ago',
    password:"1234"
  },
 { name: 'Didier',
    email: 'dideir@ihuza.com',
    role: 'Manager',
    status:'Inactive',
    lastLogin:'23 minutes ago',
    password:"1234"
  },
 { name: 'Omar',
    email: 'omar@ihuza.com',
    role: 'marketing manager',
     status:'Active',
     lastLogin:'23 minutes ago',
     password:"1234"
  },
 { name: 'Fidele',
    email: 'fidele@ihuza.com',
    role: 'CEO',
     status:'Active',
     lastLogin:'23 minutes ago',
     password:"1234"
  }];

  const login = (username, password) => {
    const user = users.find(user => 
      user.name.toLowerCase() === username.toLowerCase() && 
      user.password === password
    );
    
    if (user) {
      const userWithLoginTime = {
        ...user,
        lastLogin: new Date().toISOString()
      };
      setLoggedInUser(userWithLoginTime);
      localStorage.setItem('ihuza_loggedInUser', JSON.stringify(userWithLoginTime));
      return true;
    }
    return false;
  };


  return (
    <UserContext.Provider value={{users,loggedInUser,login}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
