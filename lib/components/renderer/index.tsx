import {
    observer,
} from 'mobx-react';
import * as React from 'react';
import {
    Layer,
    Rect,
    Stage,
} from 'react-konva';

import {
    Body,
} from './body';
import {
    Footer,
} from './footer';
import {
    Title,
} from './title';

import {
    IColorTheme,
    Store,
} from '../../store';

export interface IRendererProps {
    title: string;
    month: string[];
    day: string[];
    color: IColorTheme;
}

/**
 * Size of canvas.
 */
const size = {
    height: 500,
    width: 720,
};

/**
 * Renders a result image.
 */
export class Renderer extends React.Component<IRendererProps, {}> {
    public render(){
        const {
            title,
            month,
            day,
            color,
        } = this.props;

        const width = 720;
        const height = 530;
        const topHeight = 45;
        const footerHeight = 30;

        const restHeight = height - topHeight - footerHeight;
        return <Stage width={width} height={height}>
            <Layer>
                <Rect
                    x={0} y={0} width={width} height={height}
                    fill={color.titleBG}
                />
                <Rect
                    x={0} y={topHeight} width={width} height={restHeight + footerHeight}
                    fill={color.background}
                />
                <Title
                    size={size}
                    title={title}
                    topHeight={topHeight}
                    text={color.titleFG} />
                <Body
                    size={size}
                    topPadding={topHeight}
                    month={month}
                    day={day}
                    text={color.text}
                />
                <Footer
                    width={width}
                    height={footerHeight}
                    top={height - footerHeight}
                />

            </Layer>
        </Stage>;
    }
}
