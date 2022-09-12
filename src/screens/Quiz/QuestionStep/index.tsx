import React from 'react';
import { useAppSelector } from '../../../hooks/useSelector';

import { Container } from './styles';

const QuestionStep: React.FC = () => {

  const {current, total} = useAppSelector(state => state.global.quiz.step)

  return (
    <Container>
        <h4>{current} of {total}</h4>
    </Container>
  );
}

export default QuestionStep;