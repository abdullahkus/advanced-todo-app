import React, { useEffect, useState } from 'react';
// Styles
import { TodoContainer } from './Todo.styles';
// Components
import TodoAddComp from './TodoAdd/TodoAdd.component';
import TodoListComp from './TodoList/TodoList.component';
// Services
import {
  getAllTodo,
  deleteTodo,
  updateTodo,
  addTodo,
} from '../../services/todo.service';
const TodoComp = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchAllTodo = async () => {
      const response = await getAllTodo();
      setTodoList(response.data);
      return;
    };

    fetchAllTodo();
  }, []);

  const fetchDeleteTodo = async (todoId) => {
    const response = await deleteTodo(todoId);
    if (!response) return;
    const filteredTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(filteredTodoList);
    return;
  };

  const fetchAddTodo = async (todo) => {
    const response = await addTodo(todo);
    const addedTodo = response.data;
    if (!addedTodo) return;
    setTodoList((prevArray) => [...prevArray, response.data]);
    return;
  };

  const changeCompleted = async (todoId) => {
    const findTodo = todoList.find((todo) => todo.id === todoId);
    const changedTodo = {
      ...findTodo,
      completed: !findTodo.completed,
    };
    const response = await updateTodo(todoId, changedTodo);
    if (!response) return;

    setTodoList((state) => {
      return state.map((todo) => {
        if (todo.id === todoId) {
          return changedTodo;
        } else {
          return todo;
        }
      });
    });
  };

  const changeTodo = async (todoId, todoTitle) => {
    const findTodo = todoList.find((todo) => todo.id === todoId);
    const changedTodo = {
      ...findTodo,
      todo: todoTitle,
    };
    const response = await updateTodo(todoId, changedTodo);
    if (!response) return;

    setTodoList((state) => {
      return state.map((todo) => {
        if (todo.id === todoId) {
          return changedTodo;
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <TodoContainer className='container'>
      <TodoAddComp fetchAddTodo={fetchAddTodo} />
      <TodoListComp
        todoList={todoList}
        fetchDeleteTodo={fetchDeleteTodo}
        changeTodo={changeTodo}
        changeCompleted={changeCompleted}
      />
    </TodoContainer>
  );
};

export default TodoComp;
