import React from 'react';
// Styles
import { InformationContainer } from './TodoInformation.styles';
// Components
import ButtonComp, {
  BUTTON_TYPE_CLASSES,
} from '../../../ui/Button/Button.component';
// Filter Type
import { FILTER_TYPE_CLASSES } from '../Todo.component';

const TodoInformationComp = ({ todoListLength, changeFilterType }) => {
  const changeFilterTypeHandler = (filterType) => {
    changeFilterType(filterType);
    return;
  };

  return (
    <InformationContainer>
      <p>{todoListLength} items left</p>
      <div className='button-group'>
        <ButtonComp
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => changeFilterTypeHandler(FILTER_TYPE_CLASSES.all)}>
          All
        </ButtonComp>
        <ButtonComp
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => changeFilterTypeHandler(FILTER_TYPE_CLASSES.active)}>
          Active
        </ButtonComp>
        <ButtonComp
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() =>
            changeFilterTypeHandler(FILTER_TYPE_CLASSES.completed)
          }>
          Completed
        </ButtonComp>
      </div>
    </InformationContainer>
  );
};

export default TodoInformationComp;
