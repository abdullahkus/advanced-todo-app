import styled from 'styled-components';

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  padding: 8px 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  color: #fff;
  background: ${(props) => props.theme.color.primary};
  width: 100%;

  :hover {
    filter: brightness(85%);
  }

  :disabled {
    filter: brightness(85%);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background: none;
  color: #000;
`;
