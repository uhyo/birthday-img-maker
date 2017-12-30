import * as React from 'react';
import styled from 'styled-components';

export interface IDownloadButtonProps {
    onClick(): void;
}

const Button = styled.button`
    appearance: none;
    display: block;
    margin: 0.2em auto;
    padding: 0.5em;

    background: #dddddd;
    color: #444444;
    border: none;
    font-size: 1.6em;
    font-weight: bold;

    pointer: cursor;
`;

export const DownloadButton = ({
    onClick,
}: IDownloadButtonProps)=> {
    return <Button onClick={onClick}>
        ダウンロード
    </Button>;
};
