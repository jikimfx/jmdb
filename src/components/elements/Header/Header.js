import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="jmdb-header">
    <div className="jmdb-header-content">
      <Link to="/">
        <img className="jmdb-logo" src="./images/reactMovie_logo.png" alt="jmdb-logo" />
      </Link>
    </div>
  </div>
)

export default Header;