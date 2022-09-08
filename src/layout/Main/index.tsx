import React from 'react';
import { Navbar } from '../components';

import { Container } from './styles';

type Props = {
  children: React.ReactNode;
}

const Main: React.FC<Props> = (props) => {
  return (
    <Container>
      <Navbar title='Welcome to the Trivia Challenge!' />
      {props.children}
    </Container>
  );
}

export default Main;