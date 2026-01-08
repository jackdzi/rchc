import React from 'react';

const Information = ({ children, style = {} }) => {
  const boxStyle = {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '0', // Changed to make it not rounded
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: '13px', // Adding minion variable for text size
  };

  return (
    <div style={boxStyle}>
      {children}
    </div>
  );
};


export default Information;
