import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components';
import { useAppSelector } from '../../hooks';
import { ApiQuestions } from '../../services/api/Question';
import Question from './Question';
import QuestionStep from './QuestionStep';

import { Container } from './styles';

const Quiz: React.FC = () => {
  const questionApi = new ApiQuestions();
  const navigate = useNavigate();
  const { loading, finished } = useAppSelector(state => (
    {
      loading: state.global.quiz.loading,
      finished: state.global.quiz.finished,
    }
  ))

  React.useEffect(() => {
    questionApi.list();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (finished) {
      navigate('/results');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

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