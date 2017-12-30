import {
    observer,
} from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import {
    Store,
} from '../store';

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
            <Title title={store.title} onChange={titleChange}/>
            <Months store={store} />
        </AppDiv>;
    }
}
