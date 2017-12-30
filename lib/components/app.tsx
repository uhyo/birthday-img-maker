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
    DownloadButton,
} from './download-button';
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
    @media (min-width: 768px) {
        display: grid;
        grid-template: auto auto auto auto / auto max-content;
        grid-gap: 0.6em 0;
    }

    max-width: 760px;
    margin: 0 auto;
`;

const TitleWrapper = styled.div`
    @media (min-width: 768px) {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
    }
    @media (max-width: 767px) {
        margin: 0.5em 0;
    }
`;

const ValuesWrapper = styled.div`
    @media (max-width: 767px) {
        margin: 0.5em 0;
    }
`;

const DownloadWrapper = styled.div`
    @media (min-width: 768px) {
        grid-column: 1 / 3;
        grid-row: 3;
    }
`;

const ResultWrapper = styled.div`
    @media (min-width: 768px) {
        grid-column: 1 / 3;
        grid-row: 4;
    }
    @media (max-width: 767px) {
        margin: 0.5em 0;
    }
`;

@observer
export class App extends React.Component<IAppProps, {}> {
    constructor(props: IAppProps){
        super(props);
        this.handleDownload = this.handleDownload.bind(this);
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
            <ValuesWrapper>
                <Months store={store} />
            </ValuesWrapper>
            <ValuesWrapper>
                <Days store={store} />
            </ValuesWrapper>
            <DownloadWrapper>
                <DownloadButton onClick={this.handleDownload} />
            </DownloadWrapper>
            <ResultWrapper>
                <Renderer ref='renderer' title={title} month={month} day={day} color={color} />
            </ResultWrapper>
        </AppDiv>;
    }
    protected handleDownload(): void{
        const renderer = this.refs.renderer as Renderer;
        renderer.getURL()
        .then((url)=> {
            // download
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.download = 'uranai.png';
            a.click();
        });
    }
}
