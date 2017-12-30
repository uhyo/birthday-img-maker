import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Name = styled.div`
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

        return <Wrapper>
            <Name>{month+1}月</Name>
            <div>
                <input type='text' value={value} onChange={this.onChange} />
            </div>
        </Wrapper>;
    }
    protected onChange(e: React.ChangeEvent<HTMLInputElement>): void{
        const {
            onChange,
        } = this.props;

        onChange(e.target.value);
    }
}
