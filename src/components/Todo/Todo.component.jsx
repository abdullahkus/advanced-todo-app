import React, { useEffect, useState } from 'react';
// Styles
import { TodoContainer } from './Todo.styles';
// Components
import TodoAddComp from './TodoAdd/TodoAdd.component';
import TodoListComp from './TodoList/TodoList.component';
import TodoInformationComp from './TodoInformation/TodoInformation.component';
// Services
import {
  getAllTodo,
  deleteTodo,
  updateTodo,
  addTodo,
} from '../../services/todo.service';

export const FILTER_TYPE_CLASSES = {
  all: 'all',
  active: 'active',
  completed: 'completed',
};

const TodoComp = React.memo(() => {
  const [todoList, setTodoList] = useState([]);
  const [todoListLength, setTodoListLength] = useState(0);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [selectedFilterType, setSelectedFilterType] = useState(
    FILTER_TYPE_CLASSES.all,
  );

  useEffect(() => {
    const fetchAllTodo = () => {
      getAllTodo()
        .then((response) => {
          setTodoList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchAllTodo();
  }, []);

  useEffect(() => {
    const getTodoListLength = () => {
      const listLength = filteredTodoList.length;
      setTodoListLength(listLength);
    };

    getTodoListLength();
  }, [filteredTodoList]);

  useEffect(() => {
    const filterList = () => {
      if (selectedFilterType === FILTER_TYPE_CLASSES.all) {
        setFilteredTodoList(todoList);
      }

      if (selectedFilterType === FILTER_TYPE_CLASSES.active) {
        const filteredList = todoList.filter(
          (todo) => todo.completed === false,
        );
        setFilteredTodoList(filteredList);
      }

      if (selectedFilterType === FILTER_TYPE_CLASSES.completed) {
        const filteredList = todoList.filter((todo) => todo.completed === true);
        setFilteredTodoList(filteredList);
      }
    };

    filterList();
  }, [selectedFilterType, todoList]);

  const changeFilterType = (filterType) => {
    setSelectedFilterType(filterType);
  };

  const fetchDeleteTodo = (todoId) => {
    deleteTodo(todoId)
      .then((response) => {
        const filteredTodoList = todoList.filter((todo) => todo.id !== todoId);
        setTodoList(filteredTodoList);
      })
      .catch((error) => console.error(error));
  };

  const fetchAddTodo = (todo) => {
    addTodo(todo)
      .then((response) => {
        setTodoList((prevArray) => [...prevArray, response.data]);
      })
      .catch((error) => console.error(error));
  };

  const changeCompleted = async (todoId) => {
    const findTodo = todoList.find((todo) => todo.id === todoId);
    if (!findTodo) return;

    const changedTodo = {
      ...findTodo,
      completed: !findTodo.completed,
    };

    updateTodo(todoId, changedTodo)
      .then((response) => {
        setTodoList((state) => {
          return state.map((todo) => {
            if (todo.id === todoId) {
              return response.data;
            }
          });
        });
      })
      .catch((error) => console.error(error));
  };

  const changeTodo = async (todoId, todoTitle) => {
    const findTodo = todoList.find((todo) => todo.id === todoId);
    if (!findTodo) return;

    const changedTodo = {
      ...findTodo,
      todo: todoTitle,
    };

    updateTodo(todoId, changedTodo)
      .then((response) => {
        setTodoList((state) => {
          return state.map((todo) => {
            if (todo.id === todoId) {
              return response.data;
            } else {
              return todo;
            }
          });
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <TodoContainer className='container'>
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
      />
    </TodoContainer>
  );
});

export default TodoComp;
