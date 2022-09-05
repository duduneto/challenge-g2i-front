import React from 'react';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
}

const Main: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Main;