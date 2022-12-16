import React from 'react';
// Styles
import { InformationContainer } from './TodoInformation.styles';
// Components
import ButtonComp from '../../../ui/Button/Button.component';

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
          buttonType='inverted'
          onClick={() => changeFilterTypeHandler('all')}>
          All
        </ButtonComp>
        <ButtonComp
          buttonType='inverted'
          onClick={() => changeFilterTypeHandler('active')}>
          Active
        </ButtonComp>
        <ButtonComp
          buttonType='inverted'
          onClick={() => changeFilterTypeHandler('completed')}>
          Completed
        </ButtonComp>
      </div>
    </InformationContainer>
  );
};

export default TodoInformationComp;
