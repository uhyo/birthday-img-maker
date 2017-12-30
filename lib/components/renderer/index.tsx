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

        const topHeight = 45;
        return <Stage width={720} height={500}>
            <Layer>
                <Title
                    size={size}
                    title={title}
                    topHeight={topHeight}
                    background={color.titleBG}
                    text={color.titleFG} />
                <Body
                    size={size}
                    topPadding={topHeight}
                    month={month}
                    day={day}
                    background={color.background}
                    text={color.text}
                />

            </Layer>
        </Stage>;
    }
}
