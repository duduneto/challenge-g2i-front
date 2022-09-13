import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store';

import { setState, setAnswer, clearState } from '../redux/reducers/global';

const useGlobalDispatch = () => {
    const dispatch: AppDispatch = useDispatch();
    return {
        setState: (newState: any) => dispatch(setState(newState)),
        setAnswer: (answer: 'True' | 'False') => dispatch(setAnswer(answer)),
        clearState: () => dispatch(clearState()),
    }
};

export default useGlobalDispatch;