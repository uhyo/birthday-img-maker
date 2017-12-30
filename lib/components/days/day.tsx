import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Name = styled.div`
`;

export interface IDayProps {
    /**
     * Number of this day.
     */
    day: number;
    /**
     * Value of this day.
     */
    value: string;
    /**
     * Change handler.
     */
    onChange(value: string): void;
}

export const Day = ({
    day,
    value,
    onChange,
}: IDayProps)=> {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        onChange(e.target.value);
    };
    return <Wrapper>
        <Name>{day+1}日</Name>
        <div>
            <input type='text' value={value} onChange={changeHandler} />
        </div>
    </Wrapper>;
};
