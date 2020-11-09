import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((options) => (
        <option key={options} value={options}>
          {options}
        </option>
      ))}
    </select>
  );
};

export default Select;
