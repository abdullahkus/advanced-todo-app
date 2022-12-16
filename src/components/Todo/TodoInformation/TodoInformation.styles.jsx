import styled from 'styled-components';

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.grayThree};
  width: 100%;
  padding: 10px 25px;

  .button-group {
    display: flex;
  }
`;
