import * as React from 'react';
import styled from 'styled-components';

export interface ITitleProps {
    title: string;
    onChange(title: string): void;
}
const Wrapper = styled.div`
`;

const Header = styled.div`
`;

export class Title extends React.Component<ITitleProps, {}> {
    public render(){
        const {
            title,
            onChange,
        } = this.props;
        return <Wrapper>
            <Header>タイトルを入力</Header>
            <p>{title}</p>
        </Wrapper>;
    }
}
