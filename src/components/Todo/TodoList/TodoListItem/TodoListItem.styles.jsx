import styled, { css } from 'styled-components';
import { BaseInput } from '../../../../ui/Input/Input.styles';
import { breakpointDown } from '../../../../styles/Query.styles';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpointDown.md`
    flex-direction: column;
  `}

  ${(props) =>
    props.completed &&
    css`
      background-color: ${(props) => props.theme.color.grayFour} !important;
      color: #fff;
    `}

  .item {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 40px;
    width: 80%;
    cursor: pointer;

    ${breakpointDown.md`
    width: 100%;
  `}

    ${(props) =>
      props.completed &&
      css`
        text-decoration: line-through;
      `};
  }

  .button-group {
    display: flex;
    width: 20%;
    ${breakpointDown.md`
    width: 100%;
  `}
  }
`;

export const DeleteButton = styled.div`
  background: ${(props) => props.theme.color.primary};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
  width: 100%;

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
  background: ${(props) => props.theme.color.grayOne};
  border: 0;
  border-radius: 0;
  width: 100%;
  padding: 0 10px;
  height: 40px;
  font-size: 16px;
`;
