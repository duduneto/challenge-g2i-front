import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store';

import { setState } from '../redux/reducers/global';

const useGlobalDispatch = () => {
    const dispatch: AppDispatch = useDispatch();
    return {
        setState: (newState: any) => dispatch(setState(newState))
    }
};

export default useGlobalDispatch;