import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Name = styled.div`
    text-align: right;
`;
const Value = styled.div`
    padding-right: 0.5em;
`;

const Input = styled.input`
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export interface IMonthProps {
    /**
     * Number of this month.
     */
    month: number;
    /**
     * Value of this month.
     */
    value: string;
    /**
     * Change handler.
     */
    onChange(value: string): void;
}

export class Month extends React.Component<IMonthProps, {}> {
    constructor(props: IMonthProps){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    public render(){
        const {
            month,
            value,
        } = this.props;

        const monthid = `month-input-${month}`;
        return <>
            <Name>
                <label htmlFor={monthid}>{month+1}月</label>
            </Name>
            <Value>
                <Input id={monthid} type='text' value={value} onChange={this.onChange} />
            </Value>
        </>;
    }
    protected onChange(e: React.ChangeEvent<HTMLInputElement>): void{
        const {
            onChange,
        } = this.props;

        onChange(e.target.value);
    }
}
