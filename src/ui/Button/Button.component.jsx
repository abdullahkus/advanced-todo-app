import React from 'react';
// Styles
import { BaseButton, InvertedButton } from './Button.styles';

const getButton = (buttonType = 'base') =>
  ({
    base: BaseButton,
    inverted: InvertedButton,
  }[buttonType]);

const ButtonComp = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <>
      <CustomButton
        type='button'
        className={buttonType}
        {...otherProps}>
        {children}
      </CustomButton>
    </>
  );
};

export default ButtonComp;
