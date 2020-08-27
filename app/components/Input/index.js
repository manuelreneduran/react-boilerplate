import styled, { keyframes, css } from 'styled-components';

const shake = keyframes`
  0% {
    left: -5px;
  }
  100% {
    right: -5px;
  }
`;

const errorMixin = css`
  animation: ${shake} 0.1s linear;
  animation-iteration-count: 3;
  border: 1px solid red;
`;

const Input = styled.input`
  position: relative;
  margin: 1em 0 ${props => (props.error ? errorMixin : null)};
`;

export default Input;
