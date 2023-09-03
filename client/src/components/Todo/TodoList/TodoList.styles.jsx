import styled from 'styled-components';

export const TodoListContainer = styled.div`
  padding: 25px;
  width: 100%;
`;

export const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.color.grayThree};
  overflow: hidden;

  li:nth-child(odd) {
    background-color: ${(props) => props.theme.color.grayOne};
  }

  li:nth-child(even) {
    background-color: ${(props) => props.theme.color.grayTwo};
  }
`;
