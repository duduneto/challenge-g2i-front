import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IIndexable {
    [key: string]: string;
}

type IInitialState = IIndexable & {
    home?: any;
}

// Define the initial state using that type
const initialState: IInitialState = {
}

export const globalSlice = createSlice({
    name: 'global',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setState: (state, action: PayloadAction<Record<string, any>>) => {
            console.log('setState => ', action)
            const [[key, value]]: [string, any][] = Object.entries(action.payload);
            state[key] = value;
        },
    },
})

export const { setState } = globalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectState = (state: RootState) => state;

export default globalSlice.reducer;