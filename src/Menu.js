import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <header className='header'>
            <nav>
              <ul>
                  <li>
                      <NavLink activeClassName="active-link" to='/country'>Countries</NavLink>
                  </li>
                  <li>
                      <NavLink exact to='/city'>City</NavLink>
                  </li>
              </ul>
            </nav>

        </header>
    );
};

export default Menu;