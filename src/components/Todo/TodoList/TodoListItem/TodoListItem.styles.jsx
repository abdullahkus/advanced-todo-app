import styled, { css } from 'styled-components';
import { BaseInput } from '../../../../ui/Input/Input.styles';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.checked &&
    css`
      background-color: ${(props) => props.theme.color.grayFour} !important;
      color: #fff;
    `}

  .item {
    width: 100%;
    padding: 0 10px;

    ${(props) =>
      props.checked &&
      css`
        text-decoration: line-through;
      `}
  }
`;

export const DeleteButton = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  padding: 10px;
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
  background: transparent;
  border: 0;
  width: 100%;
`;
