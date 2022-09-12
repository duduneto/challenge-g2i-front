import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import _ from 'lodash';

interface IIndexable {
    [key: string]: any;
}

type IInitialState = IIndexable & {
    home?: any;
    quiz: {
        step: {
            current: number,
            total: number
        },
        questions: {
            category: string,
            type: boolean,
            difficulty: string,
            question: string,
            correct_answer: 'True' | 'False',
            incorrect_answers: 'True' | 'False'[]
        }[]
    }
}

type PayloadActionT = {
    key: string;
    value: any;
}

// Define the initial state using that type
const initialState: IInitialState = {
    quiz: {
        step: {
            current: 1,
            total: 0
        },
        questions: []
    }
}

export const globalSlice = createSlice({
    name: 'global',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<PayloadActionT>, keyValue?: string) => {
            _.set(state, action.payload.key, action.payload.value);
        },
    },
})

export const { setState } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectState = (state: RootState) => state;

export default globalSlice.reducer;