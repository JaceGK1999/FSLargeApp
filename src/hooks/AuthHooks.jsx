import { useState } from 'react';

export default function authHooks() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('signIn');

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    type,
    setType,
  };
}
