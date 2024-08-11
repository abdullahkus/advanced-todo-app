import React, { useContext, useState } from "react";
// Styles
import {
  TodoAddContainer,
  TodoAddTitle,
  FormContainer,
  AddInput,
  AddButton,
} from "./TodoAdd.styles";
// Components
import InputComp from "../../../ui/Input/Input.component";
import ButtonComp, {
  BUTTON_TYPE_CLASSES,
} from "../../../ui/Button/Button.component";
import { ThemeContext } from "../../../contexts/theme.context";

const TodoAddComp = React.memo(({ fetchAddTodo }) => {
  const { changeCurrentTheme } = useContext(ThemeContext);
  const [formTodo, setFormTodo] = useState("");

  const addTodoHandler = () => {
    const todo = {
      todo: formTodo,
      completed: false,
    };
    fetchAddTodo(todo);
    setFormTodo("");
  };

  const handleChange = (event) => {
    setFormTodo(event.target.value);
  };

  const changeTheme = () => {
    changeCurrentTheme();
  };

  return (
    <TodoAddContainer>
      <TodoAddTitle onClick={changeTheme}>Todo</TodoAddTitle>
      <FormContainer>
        <AddInput
          as={InputComp}
          type="text"
          name="todo"
          value={formTodo}
          onChange={handleChange}
          placeholder="Add a new todo"
        />
        <AddButton
          as={ButtonComp}
          onClick={addTodoHandler}
          buttonType={BUTTON_TYPE_CLASSES.base}
          disabled={formTodo.trim() === ""}
        >
          Add
        </AddButton>
      </FormContainer>
    </TodoAddContainer>
  );
});

export default TodoAddComp;
