import React from 'react';
import { useGlobalDispatch } from '../../hooks';

import { Container } from './styles';

const Results: React.FC = () => {

    const dispatch = useGlobalDispatch();

    React.useEffect(() => {
        dispatch.setState({key: 'navbar.title', value: 'Quiz Results'})
    }, []);

    return (
        <Container>

        </Container>
    );
}

export default Results;