import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Name = styled.div`
    text-align: right;
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
            <div>
                <input id={monthid} type='text' value={value} onChange={this.onChange} />
            </div>
        </>;
    }
    protected onChange(e: React.ChangeEvent<HTMLInputElement>): void{
        const {
            onChange,
        } = this.props;

        onChange(e.target.value);
    }
}
