import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/readings">Readings</a></li>
          <li><a href="/calendar">Calendar</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
