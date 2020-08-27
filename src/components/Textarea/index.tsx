import React, { TextareaHTMLAttributes } from 'react';

import { TextAreaBlock } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = (props) => {
    return (
        <TextAreaBlock>
            <label htmlFor={props.name}>{props.label}</label>
            <textarea id={props.name} {...props} />
        </TextAreaBlock>
    );
}

export default Textarea;