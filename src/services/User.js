import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session() && client.auth.session().user.email;
}

export async function signupUser(email, password) {
  const { user } = await client.auth.signUp({ email, password });

  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({ email, password });
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}
