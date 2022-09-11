import React from 'react';

import { ButtonComp } from './styles';

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {

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