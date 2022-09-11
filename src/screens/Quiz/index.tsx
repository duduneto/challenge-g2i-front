import React from 'react';
import Question from './Question';
import QuestionStep from './QuestionStep';

import { Container } from './styles';

const Quiz: React.FC = () => {
  return (
    <Container>
      <QuestionStep />
      <Question />
    </Container>
  );
}

export default Quiz;