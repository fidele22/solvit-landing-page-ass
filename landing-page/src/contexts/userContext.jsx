import { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const user = [{
    name: 'Admin',
    email: 'admin@ihuza.com',
    role: 'Admin',
    status:'Active',
    lastLogin:'26 minutes ago'
  }, 
   { name: 'Jhon',
    email: 'jhon@ihuza.com',
    role: 'receptionist',
    status:'Active',
    lastLogin:'23 minutes ago'
  },
 { name: 'Didier',
    email: 'dideir@ihuza.com',
    role: 'Manager',
     status:'Inactive',
     lastLogin:'23 minutes ago'
  },
 { name: 'Omar',
    email: 'omar@ihuza.com',
    role: 'marketing manager',
     status:'Active',
     lastLogin:'23 minutes ago'
  },
 { name: 'Fidele',
    email: 'fidele@ihuza.com',
    role: 'CEO',
     status:'Active',
     lastLogin:'23 minutes ago'
  }];

  


  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
