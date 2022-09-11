import { RootState } from "../store";
import { PayloadAction } from "react-redux-typescript";

const actions = (state: RootState, action: PayloadAction<string, any>) => ({
    setState(key: string, value: any) {
        return {
            ...state,
            [key]: value
        }
    }
});

export default actions;