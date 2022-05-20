import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { signInUser } from '../services/user';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('signin');

  const { setCurrentUser } = useUserContext();

  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser({ email, password });
      setCurrentUser(resp);
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const resp = await signUpUser({ email, password });
      setCurrentUser(resp);
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h3 onClick={() => setType('signIn')}>Sign In</h3>
      <h3 onClick={() => setType('signUp')}>Sign Up</h3>

      <div>{error}</div>
      <form onSubmit={type === 'signIn' ? handleSignIn : handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{type}</button>
      </form>
    </div>
  );

  // <div className="auth">
  //   <span
  //     className={`${type === 'signin' ? 'active' : ''}, signin`}
  //     onClick={() => setType('signin')}
  //   >
  //     [Sign In]
  //   </span>
  //   <span
  //     className={type === 'signup' ? 'active' : ''}
  //     onClick={() => setType('signup')}
  //   >
  //     [Sign Up]
  //   </span>
  //   <form className="auth-form" onSubmit={handleSubmit}>
  //     <label>
  //       email:
  //       <input
  //         type="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //     </label>
  //     <label>
  //       password:
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </label>

  //     <input type="submit" />
  //   </form>
  // </div>
}
