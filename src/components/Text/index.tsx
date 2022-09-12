import React from 'react';
import { TextSizesT } from '../../contents/sizes/text';
import { Container, TextComp } from './styles';

type Props = {
    content?: string;
    size?: keyof TextSizesT;
    padding?: string;
    children?: React.ReactNode;
}

const Text: React.FC<Props> = ({
    content,
    size = 'md',
    children,
    padding,
}) => {
    return (
        <Container
        padding={padding}
        >
            <TextComp
            size={size}
            >{content || children}</TextComp>
        </Container>
    );
}

export default Text;