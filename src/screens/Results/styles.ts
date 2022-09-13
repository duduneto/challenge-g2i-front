import styled from 'styled-components';

type AnswerItem = {
    disabled?: boolean
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const ResultsContainer = styled.div`
    width: 40%;
    padding: 2rem 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AnswersContainer = styled.div`
    width: 70%;
    max-width: 500px;
    height: 100%;
`;

export const AnswersBox = styled.ul`
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const AnswersItem = styled.li<AnswerItem>`
    margin: 0.8rem 0px;
    display: flex;
    align-items: center;
    color: ${({disabled}) => disabled ? '#ACACAC' : '#000'};
`;

export const AnswersIcon = styled.img`
    width: 20px;
    height: 20px;
    margin: 0px 0.5rem;
`;

export const ButtonContainer = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;