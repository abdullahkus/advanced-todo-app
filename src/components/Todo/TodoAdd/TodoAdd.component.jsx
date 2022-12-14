import React from 'react';
// Styles
import {
  TodoAddContainer,
  TodoAddTitle,
  FormContainer,
  AddInput,
  AddButton
} from './TodoAdd.styles';
// Components
import InputComp from '../../../ui/Input/Input.component';
import ButtonComp from '../../../ui/Button/Button.component';

const TodoAddComp = () => {
  return (
    <TodoAddContainer>
      <TodoAddTitle>Todo</TodoAddTitle>
      <FormContainer>
        <AddInput as={InputComp} />
        <AddButton as={ButtonComp} >Add</AddButton>
      </FormContainer>
    </TodoAddContainer>
  );
};

export default TodoAddComp;
