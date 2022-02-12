import React from 'react';

export const ButtonUI = ({ text_button, className }) => {
  return(
    <>
      <button className={className}>{text_button}</button>
    </>
  );
};
