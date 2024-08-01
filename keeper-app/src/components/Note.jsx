import React from 'react';

export const Note = ({title, content}) => {
  return (
    <div className='note'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
