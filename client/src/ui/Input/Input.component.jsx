import React from "react";
// Styles
import { BaseInput, InputGroup } from "./Input.styles";

const InputComp = ({ name, labelText, ...otherProps }) => {
  return (
    <>
      <InputGroup>
        {labelText && <label htmlFor={name}>{labelText}</label>}
        <BaseInput name={name} id={name} {...otherProps} />
      </InputGroup>
    </>
  );
};

export default InputComp;
