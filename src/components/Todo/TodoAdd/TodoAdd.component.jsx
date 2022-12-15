import React, { useState } from 'react';
// Styles
import {
  TodoAddContainer,
  TodoAddTitle,
  FormContainer,
  AddInput,
  AddButton,
} from './TodoAdd.styles';
// Components
import InputComp from '../../../ui/Input/Input.component';
import ButtonComp from '../../../ui/Button/Button.component';

const TodoAddComp = ({ fetchAddTodo }) => {
  const [formTodo, setFormTodo] = useState('');

  const addTodoHandler = () => {
    const todo = {
      todo: formTodo,
      completed: false,
    };
    fetchAddTodo(todo);
    setFormTodo('');
  };

  const handleChange = (event) => {
    setFormTodo(event.target.value);
  };

  return (
    <TodoAddContainer>
      <TodoAddTitle>Todo</TodoAddTitle>
      <FormContainer>
        <AddInput
          as={InputComp}
          type='text'
          name='todo'
          value={formTodo}
          onChange={handleChange}
        />
        <AddButton
          as={ButtonComp}
          onClick={addTodoHandler}
          disabled={formTodo.trim() === ''}>
          Add
        </AddButton>
      </FormContainer>
    </TodoAddContainer>
  );
};

export default TodoAddComp;
