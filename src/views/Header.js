import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Links({ currentUser }) {
  return (
    <div>
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
