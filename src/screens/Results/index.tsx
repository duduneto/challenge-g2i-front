import React from 'react';
import { useAppSelector, useGlobalDispatch } from '../../hooks';
import { Text, Button } from '../../components';

import {
    Container,
    AnswersContainer,
    ResultsContainer,
    AnswersBox,
    AnswersItem,
    AnswersIcon,
    ButtonContainer,
} from './styles';

import checkIcon from '../../assets/icons/check.svg'
import errorIcon from '../../assets/icons/error.svg'
import { unEscape } from '../../helpers/text';
import { useNavigate } from 'react-router-dom';

const Results: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useGlobalDispatch();
    const {
        answers,
        questions,
        correctAnswers,
    } = useAppSelector(state => ({
        answers: state.global.quiz.answers,
        questions: state.global.quiz.questions,
        correctAnswers: state.global.quiz.answers.reduce((acc, answer, idx) => {
            return acc + (
                answer === state.global.quiz.questions[idx].correct_answer
                    ? 1
                    : 0
            );
        }, 0)
    }));

    const tryAgaing = () => {
        dispatch.initState();
        navigate('/');
    }

    React.useEffect(() => {
        dispatch.setState({ key: 'navbar.title', value: 'Quiz Results' })
    }, []);

    return (
        <>
            <Container>
                <ResultsContainer>
                    <Text>You Scored</Text>
                    <Text>{correctAnswers} / {questions.length}</Text>
                </ResultsContainer>

                <AnswersContainer>
                    <AnswersBox>
                        {
                            questions.map((question, idx) => (
                                <AnswersItem disabled={question.correct_answer !== answers[idx]}>
                                    <AnswersIcon src={
                                        question.correct_answer === answers[idx] ?
                                            checkIcon
                                            : errorIcon
                                    } />
                                    <Text>{unEscape(question.question)}</Text>
                                </AnswersItem>
                            ))
                        }
                    </AnswersBox>
                </AnswersContainer>
            </Container>
            <ButtonContainer>
                <Button onClick={tryAgaing}>Try Again</Button>
            </ButtonContainer>
        </>
    );
}

export default Results;