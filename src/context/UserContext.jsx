import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { getUser } from '../services/user';

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUser());
 

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const user = await fetchProfileData();
      user && setProfile(user[0]);
    };
    getUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userName,
        setUserName,
        setProfile,
        profile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useRestaurant context must be used within a provider');
  }
  return context;
};
export { UserProvider, useUserContext };