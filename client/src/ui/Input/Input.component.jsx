import React from 'react';
// Styles
import { BaseInput, InputGroup } from './Input.styles';

const InputComp = ({ name, labelText, ...otherProps }) => {
  return (
    <>
      {labelText ? (
        <InputGroup>
          <label htmlFor={name}>{labelText}</label>
          <BaseInput
            name={name}
            id={name}
            {...otherProps}
          />
        </InputGroup>
      ) : (
        <BaseInput
          name={name}
          id={name}
          {...otherProps}
        />
      )}
    </>
  );
};

export default InputComp;
