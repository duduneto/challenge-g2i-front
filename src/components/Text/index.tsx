import React from 'react';
import { TextSizesT } from '../../contents/sizes/text';
import { Container, TextComp } from './styles';

type Props = {
    content: string;
    size?: keyof TextSizesT;
}

const Text: React.FC<Props> = ({
    content,
    size = 'md',
}) => {
    return (
        <Container>
            <TextComp
            size={size}
            >{content}</TextComp>
        </Container>
    );
}

export default Text;