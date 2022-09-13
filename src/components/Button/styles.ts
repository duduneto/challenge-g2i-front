import styled from 'styled-components';

type ButtonT = {
  width?: string;
  btnStyle?: 'success' | 'danger' | 'normal';
};

const buttonStyle = {
  success: {
    color: 'white',
    backgroundColor: '#00923f'
  },
  danger: {
    color: 'white',
    backgroundColor: '#ff0000'
  },
  normal: {
    color: 'black',
    backgroundColor: '#FFFFFF'
  },
}

export const ButtonComp = styled.button<ButtonT>`
  background-color: white;
  min-width: 100px;
  width: ${({ width }) => width || 'auto'};
  outline: none;
  border: 1px solid #797979;
  padding: 0.5rem 1rem;
  cursor: pointer;

  background-color: ${({ btnStyle }) => btnStyle ?
    buttonStyle[btnStyle].backgroundColor :
    buttonStyle.normal.backgroundColor
  };
  color: ${({ btnStyle }) => btnStyle ?
    buttonStyle[btnStyle].color :
    buttonStyle.normal.color
  };

  &:active {
    background-color: #797979;
  }
`;
