import * as React from 'react';
import styled from 'styled-components';

import {
    Day,
} from './day';

import {
    Store,
} from '../../store';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows: 1fr;
    grid-auto-flow: row;
    grid-gap: 0.2em 0.3em;
`;

export interface IDaysProps {
    store: Store;
}

export class Days extends React.Component<IDaysProps, {}> {
    public render(){
        const {
            store,
        } = this.props;

        return <Wrapper>{
            store.day.map((value, d)=> {
                const onChange = (newvalue: string)=>{
                    store.setOneDay(newvalue, d);
                };
                const grid = {
                    column: d < 16 ? 1 : 3,
                    row: d < 16 ? d+1 : d-15,
                };
                return <Day key={d} day={d} value={value} grid={grid} onChange={onChange} />;
            })
        }</Wrapper>;
    }
}
