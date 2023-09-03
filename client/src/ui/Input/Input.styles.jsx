import styled from 'styled-components';

export const BaseInput = styled.input`
  outline: none;
  padding: 8px 10px;
  border: 3px solid ${(props) => props.theme.color.grayThree};
  border-radius: 5px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
