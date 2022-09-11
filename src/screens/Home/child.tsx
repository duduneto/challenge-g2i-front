import React from 'react';
import { useGlobalDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from '../../hooks/useSelector';

// import { Container } from './styles';

const ChildComp: React.FC = () => {
    const child = useAppSelector(state => state.global.child);
    const { setState } = useGlobalDispatch();
    React.useEffect(() => {
        console.log('home => ', child)
    }, [child])
    const buttonPress = () => {
        setState({child: 'child'})
    }
    return <div><button onClick={buttonPress}>Child</button></div>;
}

export default ChildComp;