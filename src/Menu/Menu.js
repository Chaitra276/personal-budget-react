import React from 'react';

import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
      <nav>
          <ul>
          <li><Link to="/" title="Visit our HomePage">HomePage</Link></li>
          <li><Link to="/about" title="Visit the About Page">About</Link></li>
          <li><Link to="/login" title="Login to Your Account">Login</Link></li> 
          </ul>
      </nav>
  );
}
    

export default Menu;