import * as React from 'react';
import {
    Group,
    Text,
} from 'react-konva';

export interface IValueProps {
    /**
     * width of usable area.
     */
    width: number;
    /**
     * height of usable area.
     */
    height: number;
    /**
     * font size.
     */
    fontSize: number;
    /**
     * Number of columns.
     */
    columns: number;
    /**
     * Function to stringify an index.
     */
    index: (idx: number)=> string;
    /**
     * month values.
     */
    values: string[];
    /**
     * text color.
     */
    color: string;
}

export const Values = ({
    width,
    height,
    fontSize,
    columns,
    index,
    values,
    color,
}: IValueProps)=> {
    const padding = 10;
    // Number of values per column.
    const numPerCol = Math.ceil(values.length / columns);
    // Width of value.
    const onew = width / columns;
    // Height per value.
    const oneh = height / numPerCol;
    // area for monthname.
    const namew = fontSize * 2.5;
    // Left of value area.
    const valuel = padding * 2 + namew;
    return <Group>{
        values.map((value, m)=>{
            // row and column number.
            const coln = Math.floor(m / numPerCol);
            const rown = m % numPerCol;
            return <React.Fragment key={m}>
                <Text
                    x={coln * onew + padding}
                    y={rown * oneh + padding}
                    width={namew}
                    height={oneh - padding*2}
                    fontSize={fontSize}
                    align='right'
                    wrap='none'
                    text={index(m)}
                />
                <Text
                    x={coln * onew + valuel}
                    y={rown * oneh + padding}
                    width={onew - valuel}
                    height={oneh - padding*2}
                    fontSize={fontSize}
                    align='left'
                    wrap='char'
                    text={value}
                />
            </React.Fragment>;
        })
    }</Group>;
};
