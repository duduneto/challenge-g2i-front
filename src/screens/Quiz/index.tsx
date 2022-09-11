import React from 'react';
import Question from './Question';

import { Container } from './styles';

const Quiz: React.FC = () => {
  return (
    <Container>
      <Question />
    </Container>
  );
}

export default Quiz;