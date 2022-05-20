import { checkError, client } from './client';
export async function fetchAnimals() {
  const resp = await client.from('Dogs').select('*');
  return checkError(resp);
}

export async function fetchAnimalById(id) {
  const resp = await client.from('Dogs').select('*').eq('id', id);
  return checkError(resp);
}

export async function createAnimal(dog) {
  const resp = await client.from('Dogs').insert(dog);
  return checkError(resp);
}

export async function updateAnimal(dog) {
  const resp = await client.from('Dogs').update(dog).match({ id: dog.id });
  return checkError(resp);
}
