import styled from 'styled-components';
import { BaseButton } from '../../../ui/Button/Button.styles';
import { BaseInput } from '../../../ui/Input/Input.styles';

export const TodoAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 25px;
  width: 100%;
  background: ${(props) => props.theme.color.primary};
`;

export const TodoAddTitle = styled.h1`
  font-size: 27px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bolder;
  color: #fff;
`;

export const FormContainer = styled.div`
  display: flex;
  border: 3px solid ${(props) => props.theme.color.grayThree};
  border-radius: 5px;
  width: 70%;
  overflow: hidden;
`;

export const AddInput = styled(BaseInput)`
  border: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
`;

export const AddButton = styled(BaseButton)`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: 0;
`;
