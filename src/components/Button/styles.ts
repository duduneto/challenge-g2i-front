import styled from 'styled-components';

type ButtonT = {
  width?: string;
}

export const ButtonComp = styled.button<ButtonT>`
  background-color: white;
  min-width: 100px;
  width: ${({width}) => width || 'auto'};
  outline: none;
  border: 1px solid #797979;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:active {
    background-color: #797979;
  }
`;
