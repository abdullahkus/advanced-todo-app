import React, { useState } from 'react';
// Styles
import {
  ListItem,
  DeleteButton,
  EditButton,
  SaveButton,
  Input,
} from './TodoListItem.styles';
import InputComp from '../../../../ui/Input/Input.component';

const TodoListItemComp = ({
  todo,
  fetchDeleteTodo,
  changeTodo,
  changeCompleted,
}) => {
  const [formTodo, setFormTodo] = useState(todo.todo);
  const [isEdit, setIsEdit] = useState(false);

  const changeCancel = () => {
    setIsEdit(false);
    setFormTodo(todo.todo);
  };

  const handleChange = (event) => {
    setFormTodo(event.target.value);
  };

  const changeCompletedHandler = (todoId) => {
    changeCompleted(todoId);
  };

  const saveHandler = (todoId) => {
    changeTodo(todoId, formTodo);
    setIsEdit(false);
  };

  return (
    <>
      <ListItem completed={todo.completed}>
        {isEdit ? (
          <Input
            as={InputComp}
            name='todo'
            type='text'
            value={formTodo}
            onChange={handleChange}
          />
        ) : (
          <p
            className='item'
            onClick={() => changeCompletedHandler(todo.id)}>
            {todo.todo}
          </p>
        )}
        {isEdit ? (
          <div className='button-group'>
            <DeleteButton onClick={changeCancel}>x</DeleteButton>
            <SaveButton onClick={() => saveHandler(todo.id, formTodo)}>
              Save
            </SaveButton>
          </div>
        ) : (
          <div className='button-group'>
            <EditButton onClick={() => setIsEdit(true)}>Edit</EditButton>
            <DeleteButton onClick={() => fetchDeleteTodo(todo.id)}>
              x
            </DeleteButton>
          </div>
        )}
      </ListItem>
    </>
  );
};

export default TodoListItemComp;
