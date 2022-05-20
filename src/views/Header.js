import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { logout } from '../services/User';

const handleLogout = async () => {
  await logout();
  window.location.reload();
};

export default function Links() {
  const { currentUser } = useUserContext();
  return (
    <div>
      <div>
        {currentUser && (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <ul>
        {currentUser && (
          <li>
            <NavLink to={'/create'}>Create your animals!!!</NavLink>
          </li>
        )}
        <li>
          <NavLink to={'/'}>Back to all animals!</NavLink>
        </li>
        {!currentUser && (
          <li>
            <NavLink to={'/login'}>Come log in to post your animals!!</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
