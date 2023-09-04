import styled, { keyframes, css } from "styled-components";
import { BaseButton } from "../../../ui/Button/Button.styles";
import { BaseInput } from "../../../ui/Input/Input.styles";
import { breakpointDown } from "../../../styles/Query.styles";

export const TodoAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 25px;
  width: 100%;
  background: ${(props) => props.theme.color.primary};
`;

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px);
  }
  40% {
    transform: translateX(5px);
  }
  60% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const TodoAddTitle = styled.h1`
  font-size: 27px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bolder;
  cursor: pointer;
  color: ${(props) => props.theme.textColor.white};
  animation: ${shake} 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
`;

export const FormContainer = styled.div`
  display: flex;
  border: 3px solid ${(props) => props.theme.color.grayThree};
  border-radius: 5px;
  overflow: hidden;
  width: 70%;

  ${breakpointDown.sm`
    flex-direction: column;
  `}

  ${breakpointDown.md`
    width: 100%;
  `}
`;

export const AddInput = styled(BaseInput)`
  border: 0;
  height: 100%;
  border-radius: 0;
  width: 100%;
`;

export const AddButton = styled(BaseButton)`
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: 0;
  width: 20%;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.textColor.white};

  ${breakpointDown.sm`
    width: 100%;
  `}
`;
