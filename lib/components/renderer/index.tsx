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
export interface IRendererState {
    innerWidth: number;
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
export class Renderer extends React.Component<IRendererProps, IRendererState> {
    constructor(props: IRendererProps){
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.state = {
            innerWidth: document.body.offsetWidth,
        };
    }
    public componentDidMount(){
        this.handleResize();
        window.addEventListener('resize', this.handleResize, false);
    }
    public componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize, false);
    }
    public render(){
        const {
            title,
            month,
            day,
            color,
        } = this.props;
        const {
            innerWidth,
        } = this.state;

        const width = 720;
        const height = 530;
        const topHeight = 45;
        const footerHeight = 30;

        const restHeight = height - topHeight - footerHeight;

        // scaling to fit available size.
        const scale = width <= innerWidth ? 1 : innerWidth / width;
        const stageWidth = Math.floor(width * scale);
        const stageHeight = Math.floor(height * scale);
        return <Stage ref='stage' width={stageWidth} height={stageHeight}>
            <Layer width={width} height={height} scaleX={scale} scaleY={scale}>
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
    public getURL(): Promise<string>{
        return new Promise((resolve)=>{
            const stage = this.refs.stage as any;
            const s = stage.getStage();
            s.toDataURL({
                callback: resolve,
                height: 530,
                mimeType: 'image/png',
                width: 720,
                x: 0,
                y: 0,
            });
        });
    }
    protected handleResize(){
        this.setState({
            innerWidth: document.body.offsetWidth,
        });
    }
}
