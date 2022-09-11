import React from 'react';

import { Container, CardBox } from './styles';

type Props = {
    children: React.ReactNode;
    maxWidth?: string;
}

const Card: React.FC<Props> = ({
    children,
    maxWidth,
}) => {
    return (
        <Container>
            <CardBox
                maxWidth={maxWidth}
            >
                {children}
            </CardBox>
        </Container>
    );
}

export default Card;