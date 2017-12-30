import * as React from 'react';
import {
    Group,
    Rect,
    Text,
} from 'react-konva';

export interface ITitleProps {
    /**
     * size of image.
     */
    size: {
        width: number;
        height: number;
    };
    /**
     * height of top panel.
     */
    topHeight: number;
    /**
     * Title of an image.
     */
    title: string;
    /**
     * text color of title.
     */
    text: string;
}

/**
 * Renders the title.
 */
export class Title extends React.Component<ITitleProps, {}> {
    public render(){
        const {
            size: {
                width,
            },
            topHeight,
            title,
            text,
        } = this.props;
        const fontSize = 36;
        return <Group x={0} y={0}>
            <Text
                text={title}
                fontSize={fontSize}
                align='center'
                fill={text}
                wrap='none'
                x={0}
                y={(topHeight-fontSize)/2}
                width={width}
                height={fontSize}
            />
        </Group>;
    }
}
