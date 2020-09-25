import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from './styles';

function MenuComponent() {
  return (
    <Menu>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/projects">Projetos</Link>
      </MenuItem>
    </Menu>
  );
}

export default MenuComponent;
