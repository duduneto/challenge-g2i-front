import React from 'react';
import { Container } from './styles';

type Props = {
  children?: React.ReactNode;
}

const Loading: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <span>Loading...</span>
      {
        children
      }
    </Container>
  );
}

export default Loading;