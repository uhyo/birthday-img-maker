import * as React from 'react';
import styled from 'styled-components';

export interface ITitleProps {
    title: string;
    onChange(title: string): void;
}
const Wrapper = styled.div`
`;

const InnerWrapper = styled.div`
    margin: 0 auto;
    width: max-content;
`;

const Header = styled.div`
    font-size: 1.1em;
    font-weight: bold;
    margin: 4px;
`;

const Input = styled.input`
    width: 20em;
`;

export class Title extends React.Component<ITitleProps, {}> {
    constructor(props: ITitleProps){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    public render(){
        const {
            title,
        } = this.props;
        return <Wrapper>
            <InnerWrapper>
                <Header>タイトル</Header>
                <p><Input type='text' value={title} onChange={this.onChange}/></p>
            </InnerWrapper>
        </Wrapper>;
    }
    protected onChange(e: React.ChangeEvent<HTMLInputElement>): void{
        const {
            onChange,
        } = this.props;
        onChange(e.target.value);
    }
}
