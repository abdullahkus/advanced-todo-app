import React from "react";
// Components
import TodoListItem from "./TodoListItem/TodoListItem.component";
// Styles
import { TodoListContainer, TodoList } from "./TodoList.styles";

const TodoListComp = ({
  todoList,
  fetchDeleteTodo,
  changeTodo,
  changeCompleted,
}) => {
  return (
    <TodoListContainer>
      {todoList.length > 0 ? (
        <TodoList>
          {todoList.map((todo, index) => (
            <TodoListItem
              key={index}
              todo={todo}
              fetchDeleteTodo={fetchDeleteTodo}
              changeTodo={changeTodo}
              changeCompleted={changeCompleted}
            />
          ))}
        </TodoList>
      ) : (
        <p>There is nothing to do yet!</p>
      )}
    </TodoListContainer>
  );
};

export default TodoListComp;
