import * as React from 'react';
import {
    Text,
} from 'react-konva';

const footerText = `誕生日占い画像を作るやつ https://uhyohyo.net/birthday-image/`;

export interface IFooterProp {
    /**
     * Width of footer area.
     */
    width: number;
    /**
     * Height of footer area.
     */
    height: number;
    /**
     * vertical position of area.
     */
    top: number;
}
/**
 * Render a footer.
 */
export const Footer = ({
    width,
    height,
    top,
}: IFooterProp)=>{
    const fontSize = 14;
    return <Text
        x={0} y={top + height - fontSize-5}
        width={width} height={fontSize}
        fontSize={fontSize}
        fill='rgba(0,0,0,.4)'
        align='right'
        text={footerText}
    />;
};
