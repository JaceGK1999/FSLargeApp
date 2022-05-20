import { useState, useEffect } from 'react';
import RenderAnimals from '../components/RenderAnimals';
import { useAnimalContext } from '../context/AnimalContext';

export default function AnimalsList() {
  const [animals, setAnimals] = useState([]);
  const { fetch } = useAnimalContext();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch;
      console.log(resp, 'animal resp');
      setAnimals(resp);
    };
    fetchData();
  }, []);
  return (
    <div>
      {' '}
      {animals.map((item) => (
        <div key={item.id} to={`/animals/${item.id}`}>
          <RenderAnimals {...item} />
        </div>
      ))}
    </div>
  );
}
