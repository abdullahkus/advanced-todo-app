import React from 'react';
// Styles
import { BaseButton, InvertedButton } from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
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
