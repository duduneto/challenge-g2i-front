import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import _ from 'lodash';

interface IIndexable {
    [key: string]: any;
}

type IInitialState = IIndexable & {
    home?: any;
    error?: {
        message: string;
    },
    quiz: {
        loading: boolean,
        step: {
            current: number,
            total: number
        },
        answers: string[],
        questions: {
            category: string,
            type: boolean,
            difficulty: string,
            question: string,
            correct_answer: 'True' | 'False',
            incorrect_answers: string[],
        }[],
        finished: boolean,
    }
}

type PayloadActionT = {
    key: string;
    value: any;
}

// Define the initial state using that type
const initialState: IInitialState = {
    quiz: {
        loading: false,
        step: {
            current: 0,
            total: 0,
        },
        questions: [],
        answers: [],
        finished: false,
    }
}

export const globalSlice = createSlice({
    name: 'global',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        clearQuiz: (state) => {
            state.quiz = initialState.quiz;
        },
        setState: (state, action: PayloadAction<PayloadActionT>) => {
            _.set(state, action.payload.key, action.payload.value);
        },
        setAnswer: (state, action: PayloadAction<'True' | 'False'>) => {
            state.quiz.answers = [...state.quiz.answers, action.payload];
        }
    },
})

export const { setState, setAnswer, clearQuiz } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectState = (state: RootState) => state;

export default globalSlice.reducer;