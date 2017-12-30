import * as React from 'react';
import styled from 'styled-components';

const Name = styled.div`
    text-align: right;
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
     * Grid position.
     */
    grid: {
        column: number;
        row: number;
    };
    /**
     * Change handler.
     */
    onChange(value: string): void;
}

export const Day = ({
    day,
    value,
    grid,
    onChange,
}: IDayProps)=> {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=> {
        onChange(e.target.value);
    };
    const styleName = {
        gridColumn: grid.column,
        gridRow: grid.row,
    };
    const styleInput = {
        gridColumn: grid.column + 1,
        gridRow: grid.row,
    };
    const inputid = `day-input-${day}`;
    return <>
        <Name style={styleName}>
            <label htmlFor={inputid}>{day+1}日</label>
        </Name>
        <div style={styleInput}>
            <input id={inputid} type='text' value={value} onChange={changeHandler} />
        </div>
    </>;
};
