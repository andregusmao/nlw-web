import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <InputBlock>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" id={props.name} {...props} />
        </InputBlock>
    );
}

export default Input;