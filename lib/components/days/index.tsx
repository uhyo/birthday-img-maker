import * as React from 'react';
import styled from 'styled-components';

import {
    Day,
} from './day';

import {
    Store,
} from '../../store';

const Wrapper = styled.div`
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
                return <Day key={d} day={d} value={value} onChange={onChange} />;
            })
        }</Wrapper>;
    }
}
