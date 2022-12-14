import React from 'react';
// Styles
import { TodoContainer } from './Todo.styles';
// Components
import TodoAddComp from './TodoAdd/TodoAdd.component';
import TodoListComp from './TodoList/TodoList.component';

const TodoComp = () => {
  return (
    <TodoContainer className='container'>
      <TodoAddComp />
      <TodoListComp />
    </TodoContainer>
  );
};

export default TodoComp;
