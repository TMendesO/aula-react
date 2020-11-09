import React from 'react';

const Button = ({ id, name, ...props }) => {
  return (
    <button id={id} name={id} {...props}>
      {name}
    </button>
  );
};

export default Button;
