import React from 'react';
// Components
import TodoListItem from './TodoListItem/TodoListItem.component';
// Styles
import { TodoListContainer, TodoList } from './TodoList.styles';
const TodoListComp = () => {
  return (
    <TodoListContainer>
      <TodoList>
        <TodoListItem></TodoListItem>
        <TodoListItem></TodoListItem>
        <TodoListItem></TodoListItem>
      </TodoList>
    </TodoListContainer>
  );
};

export default TodoListComp;
