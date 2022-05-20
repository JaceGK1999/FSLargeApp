import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Links({ currentUser }) {
  return (
    <div>
      <ul>
        {currentUser && (
          <li>
            <NavLink to={'/create'}>Create your dog!!!</NavLink>
          </li>
        )}
        <li>
          <NavLink to={'/'}>Back to all dogs!</NavLink>
        </li>
        {!currentUser && (
          <li>
            <NavLink to={'/login'}>Come log in to create a dog!</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
