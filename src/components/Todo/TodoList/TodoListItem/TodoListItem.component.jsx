import React from 'react';
// Styles
import { ListItem, DeleteButton } from './TodoListItem.styles';

const TodoListItemComp = () => {
  return (
    <ListItem>
      <p className='item'>TodoListItemComp</p>
      <DeleteButton>x</DeleteButton>
    </ListItem>
  );
};

export default TodoListItemComp;
