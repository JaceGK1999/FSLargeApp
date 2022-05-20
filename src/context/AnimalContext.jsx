import { createContext } from 'react';
import { fetchAnimals } from '../services/FetchAnimals';

const AnimalContext = createContext();
const AnimalProvider = ({ children }) => {
  const fetch = fetchAnimals();
  return (
    <AnimalContext.Provider value={{ fetch }}>
      {children}
    </AnimalContext.Provider>
  );
};

const useAnimalContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a provider');
  }
  return context;
};

export { AnimalProvider, useAnimalContext };
//from fetch... name, image, breed, bio, age
