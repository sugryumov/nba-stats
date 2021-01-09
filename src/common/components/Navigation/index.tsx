import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './constants';

function Navigation() {
  return (
    <nav>
      <ul>
        {menuItems.map((item, idx) => (
          <li key={`${item.name}_${idx}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
