import {
    observer,
} from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import {
    Store,
} from '../store';

import {
    Days,
} from './days';
import {
    Months,
} from './months';
import {
    Renderer,
} from './renderer';
import {
    Title,
} from './title';

export interface IAppProps {
    store: Store;
}
const AppDiv = styled.div`
    display: grid;
    grid-template: auto 1fr auto / auto auto;
    grid-gap: 0.6em 0;

    max-width: 800px;
    margin: 0 auto;
`;

const TitleWrapper = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
`;

const ResultWrapper = styled.div`
    grid-column: 1 / 3;
    grid-row: 3 / 4;
`;

@observer
export class App extends React.Component<IAppProps, {}> {
    constructor(props: IAppProps){
        super(props);
    }
    public render(){
        const {
            store,
        } = this.props;
        const {
            title,
            month,
            day,
            color,
        } = store;
        const titleChange = (newtitle: string)=> {
            store.setTitle(newtitle);
        };
        return <AppDiv>
            <TitleWrapper>
                <Title title={store.title} onChange={titleChange}/>
            </TitleWrapper>
            <Months store={store} />
            <Days store={store} />
            <ResultWrapper>
                <Renderer title={title} month={month} day={day} color={color} />
            </ResultWrapper>
        </AppDiv>;
    }
}
