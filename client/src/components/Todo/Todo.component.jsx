import React, { useEffect, useState, useMemo } from "react";
// Styles
import { TodoContainer } from "./Todo.styles";
// Components
import TodoAddComp from "./TodoAdd/TodoAdd.component";
import TodoListComp from "./TodoList/TodoList.component";
import TodoInformationComp from "./TodoInformation/TodoInformation.component";
// Services
import {
  getAllTodo,
  deleteTodo,
  updateTodo,
  addTodo,
} from "../../services/todo.service";

export const FILTER_TYPE_CLASSES = {
  all: "all",
  active: "active",
  completed: "completed",
};

const TodoComp = () => {
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [selectedFilterType, setSelectedFilterType] = useState(
    FILTER_TYPE_CLASSES.all
  );

  const fetchTodos = async (signal) => {
    try {
      const response = await getAllTodo({ signal });
      if (!signal.aborted) {
        setTodoList(response.data);
      }
    } catch (error) {
      if (error.name !== "CanceledError") {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchTodos(controller.signal);
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const filterList = () => {
      switch (selectedFilterType) {
        case FILTER_TYPE_CLASSES.active:
          setFilteredTodoList(todoList.filter((todo) => !todo.completed));
          break;
        case FILTER_TYPE_CLASSES.completed:
          setFilteredTodoList(todoList.filter((todo) => todo.completed));
          break;
        default:
          setFilteredTodoList(todoList);
      }
    };
    filterList();
  }, [selectedFilterType, todoList]);

  const todoListLength = useMemo(
    () => filteredTodoList.length,
    [filteredTodoList]
  );

  const changeFilterType = (filterType) => setSelectedFilterType(filterType);

  const fetchDeleteTodo = async (todoId) => {
    try {
      await deleteTodo(todoId);
      setTodoList(todoList.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAddTodo = async (todo) => {
    try {
      const response = await addTodo(todo);
      setTodoList((prevArray) => [...prevArray, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const changeCompleted = async (todoId) => {
    const findTodo = todoList.find((todo) => todo.id === todoId);
    if (!findTodo) return;

    try {
      const changedTodo = { ...findTodo, completed: !findTodo.completed };
      const response = await updateTodo(todoId, changedTodo);
      setTodoList((state) =>
        state.map((todo) => (todo.id === todoId ? response.data : todo))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const changeTodo = async (todoId, todoTitle) => {
    const findTodo = todoList.find((todo) => todo.id === todoId);
    if (!findTodo) return;

    try {
      const changedTodo = { ...findTodo, todo: todoTitle };
      const response = await updateTodo(todoId, changedTodo);
      setTodoList((state) =>
        state.map((todo) => (todo.id === todoId ? response.data : todo))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodoContainer className="container">
      <TodoAddComp fetchAddTodo={fetchAddTodo} />
      <TodoListComp
        todoList={filteredTodoList}
        fetchDeleteTodo={fetchDeleteTodo}
        changeTodo={changeTodo}
        changeCompleted={changeCompleted}
        changeFilterType={changeFilterType}
      />
      <TodoInformationComp
        todoListLength={todoListLength}
        changeFilterType={changeFilterType}
        selectedFilterType={selectedFilterType}
      />
    </TodoContainer>
  );
};

export default TodoComp;
