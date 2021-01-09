import React from 'react';
import Navigation from 'common/components/Navigation';
import './index.css';

const Header = () => {
  return (
    <header className="header-app">
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
