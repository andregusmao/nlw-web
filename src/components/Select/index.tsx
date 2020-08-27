import React, { SelectHTMLAttributes } from 'react';

import { SelectedBlock } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = (props) => {
    return (
        <SelectedBlock>
            <label htmlFor={props.name}>{props.label}</label>
            <select id={props.name} value="" {...props}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {
                    props.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
                }
            </select>
        </SelectedBlock>
    );
}

export default Select;