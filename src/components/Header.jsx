import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/aboutme">About me</Link> | <Link to="/proj">Projects</Link> | <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Header;