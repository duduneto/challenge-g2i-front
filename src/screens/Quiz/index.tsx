import React from 'react';
import { Loading } from '../../components';
import { useAppSelector } from '../../hooks';
import { ApiQuestions } from '../../services/api/Question';
import Question from './Question';
import QuestionStep from './QuestionStep';

import { Container } from './styles';

const Quiz: React.FC = () => {
  const questionApi = new ApiQuestions();
  const loading = useAppSelector(state => state.global.quiz.loading)

  React.useEffect(() => {
    questionApi.list();
  }, []);

  return (
    <Container>
      {
        loading ? (<Loading />) : (
          <>
            <QuestionStep />
            <Question />
          </>
        )
      }
    </Container>
  );
}

export default Quiz;