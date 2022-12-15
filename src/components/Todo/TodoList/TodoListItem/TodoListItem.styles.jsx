import styled, { css } from 'styled-components';
import { BaseInput } from '../../../../ui/Input/Input.styles';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.completed &&
    css`
      background-color: ${(props) => props.theme.color.grayFour} !important;
      color: #fff;
    `}

  .item {
    width: 100%;
    padding: 0 10px;
    cursor: pointer;
    height: 40px;
    display: flex;
    align-items: center;

    ${(props) =>
      props.completed &&
      css`
        text-decoration: line-through;
      `};
  }
`;

export const DeleteButton = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 40px;
  cursor: pointer;

  :hover {
    filter: brightness(85%);
  }
`;

export const EditButton = styled(DeleteButton)`
  background: ${(props) => props.theme.color.grayFour};
`;

export const SaveButton = styled(DeleteButton)`
  background: green;
`;

export const Input = styled(BaseInput)`
  background: ${props => props.theme.color.grayOne};
  border: 0;
  border-radius: 0;
  width: 100%;
  padding: 0 10px;
  height: 40px;
  font-size: 16px;
`;
