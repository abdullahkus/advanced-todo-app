import styled from 'styled-components';
import { breakpointDown } from '../../../styles/Query.styles';

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.grayThree};
  width: 100%;
  padding: 10px 25px;

  ${breakpointDown.sm`
    flex-direction: column
  `}

  .button-group {
    display: flex;
  }
`;
