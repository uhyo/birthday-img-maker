import * as React from 'react';
import {
    Group,
    Rect,
    Text,
} from 'react-konva';

import {
    Values,
} from './month';

export interface IBodyProps {
    /**
     * size of image.
     */
    size: {
        width: number;
        height: number;
    };
    /**
     * padding at top.
     */
    topPadding: number;
    /**
     * month values.
     */
    month: string[];
    /**
     * day values.
     */
    day: string[];
    /**
     * text color.
     */
    text: string;
}

export const Body = ({
    size: {
        width,
        height,
    },
    topPadding,
    month,
    day,
    text,
}: IBodyProps)=> {
    // use left 40% for months, rest for days.
    const monthAreaWidth = width * 0.4;
    const dayAreaWidth = width * 0.6;

    // height of the body area.
    const bodyh = height - topPadding;

    return <Group x={0} y={topPadding}>
        <Values
            width={monthAreaWidth}
            height={bodyh}
            fontSize={21}
            columns={1}
            index={(m)=>`${m+1}月`}
            values={month}
            color={text}
        />
        <Group x={monthAreaWidth}>
            <Values
                width={dayAreaWidth}
                height={bodyh}
                fontSize={17}
                columns={2}
                index={(d)=>`${d+1}日`}
                values={day}
                color={text}
            />
        </Group>
    </Group>;
};
