import React from 'react';
import { Button, Card, Text } from '../../../components';
import { useAppSelector, useGlobalDispatch } from '../../../hooks';
import { unEscape } from '../../../helpers/text';

import {
  Container,
  ContentBox,
  ButtonBox,
} from './styles';

const Question: React.FC = () => {

  const { step, questions } = useAppSelector(state => ({ step: state.global.quiz.step, questions: state.global.quiz.questions }));
  const dispatch = useGlobalDispatch();

  const nextQuestion = () => {
    dispatch.setState({ key: 'quiz.step.current', value: step.current + 1 })
  }

  const wrapUpQuiz = () => {
    dispatch.setState({key: 'quiz.finished', value: true});
  }

  const answerQuestion = (answer: 'True' | 'False') => {
    dispatch.setAnswer(answer);
    if(step.current !== step.total - 1) {
      nextQuestion();
    } else {
      wrapUpQuiz();
    }
  }

  React.useEffect(() => {
    if (questions?.[step.current]) {
      dispatch.setState({ key: 'navbar.title', value: questions[step.current].category })
    }
  }, [step, questions])

  return (
    <Container>
      <Card>
        <ContentBox>
          <Text
            padding='1rem'
          >
            {
              unEscape(questions?.[step.current]?.question)
            }
          </Text>
        </ContentBox>
      </Card>
      <ButtonBox>
        <Button width='48%' onClick={() => answerQuestion('False')}>False</Button>
        <Button width='48%' onClick={() => answerQuestion('True')}>True</Button>
      </ButtonBox>
    </Container>
  );
}

export default Question;