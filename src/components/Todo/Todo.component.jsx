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
      setTodoList(response.data.todos);
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

  const changeCompleted = (todoId) => {
    setTodoList((state) => {
      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  };

  // const handleCompleted = async (todoId, todo) => {
  //   const response = await updateTodo(todoId, todo);
  //   if (!response) return;
  //   const findTodoIndex = todoList.find((todo) => todo.id === todoId);
  //   const updatedTodoList = todoList.map((todo) => {
  //     if (todo.id === todoId) {
  //       todo.completed = !todo.completed;
  //     }
  //   });
  // };

  const changeTodo = (todoId, todoTitle) => {
    setTodoList((state) => {
      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            todo: todoTitle,
          };
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
