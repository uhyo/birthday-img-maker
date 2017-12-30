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
    Title,
} from './title';

export interface IAppProps {
    store: Store;
}
const AppDiv = styled.div`
    display: grid;
    grid-template: auto 1fr / auto auto;
    grid-gap: 0.6em 0;

    max-width: 800px;
    margin: 0 auto;
`;

const TitleWrapper = styled.div`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
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
        const titleChange = (title: string)=> {
            store.setTitle(title);
        };
        return <AppDiv>
            <TitleWrapper>
                <Title title={store.title} onChange={titleChange}/>
            </TitleWrapper>
            <Months store={store} />
            <Days store={store} />
        </AppDiv>;
    }
}
