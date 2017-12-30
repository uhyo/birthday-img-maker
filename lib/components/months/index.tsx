import {
    observer,
} from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import {
    Month,
} from './month';

import {
    Store,
} from '../../store';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-rows: 1fr;
    grid-auto-flow: row;
    grid-gap: 0 0.3em;
`;

export interface IMonthsProps {
    store: Store;
}

@observer
export class Months extends React.Component<IMonthsProps, {}> {
    public render(){
        const {
            store,
        } = this.props;
        return <Wrapper>{
            store.month.map((value, m)=> {
                const onChange = (newvalue: string)=>{
                    store.setOneMonth(newvalue, m);
                };
                return <Month key={m} month={m} value={value} onChange={onChange} />;
            })
        }</Wrapper>;
    }
}
