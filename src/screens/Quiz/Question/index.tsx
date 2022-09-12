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

  React.useEffect(() => {
    if (questions?.[step.current]) {
      dispatch.setState({ key: 'navbar.title', value: questions[step.current].category })
    }
  }, [step, questions])

  return (
    <Container>
      <Card>
        <ContentBox>
          <Text content={unEscape(questions[step.current].question)}></Text>
        </ContentBox>
      </Card>
      <ButtonBox>
        <Button width='48%'>False</Button>
        <Button width='48%' onClick={nextQuestion}>True</Button>
      </ButtonBox>
    </Container>
  );
}

export default Question;