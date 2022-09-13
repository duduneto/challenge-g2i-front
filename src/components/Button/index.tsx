import React from 'react';

import { ButtonComp } from './styles';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    width?: string;
    btnStyle?: 'success' | 'danger' | 'normal';
}

const Button: React.FC<IButton> = (props) => {
    return (
        <ButtonComp
            {...props}
        >
            {props.children}
        </ButtonComp>
    );
}

export default Button;