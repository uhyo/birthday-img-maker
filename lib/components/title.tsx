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

const Input = styled.input`
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
            <Header>タイトルを入力</Header>
            <p><Input type='text' value={title} onChange={this.onChange}/></p>
        </Wrapper>;
    }
    protected onChange(e: React.ChangeEvent<HTMLInputElement>): void{
        const {
            onChange,
        } = this.props;
        onChange(e.target.value);
    }
}
