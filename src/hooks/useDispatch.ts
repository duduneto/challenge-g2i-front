import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store';

import { setState, setAnswer, clearQuiz } from '../redux/reducers/global';

const useGlobalDispatch = () => {
    const dispatch: AppDispatch = useDispatch();
    return {
        setState: (newState: any) => dispatch(setState(newState)),
        setAnswer: (answer: 'True' | 'False') => dispatch(setAnswer(answer)),
        clearQuiz: () => dispatch(clearQuiz()),
    }
};

export default useGlobalDispatch;