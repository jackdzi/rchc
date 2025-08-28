import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content" style={{ paddingBottom: '20px' }}>
        <p style={{ textAlign: 'center', color: 'black', fontFamily: 'Minion Variable Concept', textTransform: 'none' }}>
          for more information contact
          <a href="mailto:ms273@rice.edu" style={{ color: '#6699CC', textDecoration: 'none' }}> ms273@rice.edu </a> or
          <a href="mailto:jh215@rice.edu" style={{ color: '#6699CC', textDecoration: 'none' }}> jh215@rice.edu </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
