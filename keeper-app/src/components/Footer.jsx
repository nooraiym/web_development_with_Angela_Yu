import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright &#9426; {year}
      </p>
    </footer>
  );
};
