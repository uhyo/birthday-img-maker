import {
    observable,
} from 'mobx';

import {
    shuffle,
} from './util';

/**
 * A color theme.
 */
export interface IColorTheme {
    /**
     * Background color of title.
     */
    titleBG: string;
    /**
     * Text color of title.
     */
    titleFG: string;
    /**
     * Background color of others.
     */
    background: string;
    /**
     * Text color of others.
     */
    text: string;
}

/**
 * A store of parameters.
 */
export class Store {
    /**
     * Title of an image.
     */
    @observable public title: string = '誕生日占い';
    /**
     * Title of each month.
     */
    @observable public month: string[] = shuffle([...month_init]);
    /**
     * Title of each day.
     */
    @observable public day: string[] = shuffle([...day_init]);
    /**
     * Color theme.
     */
    @observable public color: IColorTheme = makeColorTheme();

    /**
     * Set a new title.
     * @param title new title.
     */
    public setTitle(title: string): void {
        this.title = title;
    }
    /**
     * Set a new string of a month.
     */
    public setOneMonth(str: string, month: number): void {
        if (0 <= month && month < 12){
            const newm = [... this.month];
            newm[month] = str;
            this.month = newm;
        }
    }
    /**
     * Set a new string of a day.
     */
    public setOneDay(str: string, day: number): void {
        if (0 <= day && day < 31){
            const newd = [... this.day];
            newd[day] = str;
            this.day = newd;
        }
    }
}

/**
 * Initial values for month.
 */
const month_init = [
    'いつでも',
    'めっちゃ',
    'ことごとく',
    '隙を見ては',
    '四六時中',
    '1回くらいは',
    '結構',
    '人生で一番',
    '時々',
    '事あるごとに',
    'たまに',
    '毎日のように',
];

/**
 * Initial values for day.
 */
const day_init = [
    // 1-10
    '犬に噛まれる',
    'お金を拾う',
    '怪我をする',
    '足が速くなる',
    '爆発する',
    '寝坊する',
    '人に好かれる',
    '心が温まる',
    '猫に懐かれる',
    '時間を間違える',
    // 11-20
    '失敗する',
    '穴に落ちる',
    'じゃんけんで負ける',
    '人に笑われる',
    '落ち込む',
    '電車を乗り過ごす',
    '停電する',
    '賭けに勝つ',
    '病気にかかる',
    '1人で過ごす',
    // 21-30
    '車に乗る',
    '誕生日が来る',
    '無視される',
    '良い知らせが来る',
    '変な目で見られる',
    '太る',
    '騙される',
    '大逆転する',
    '何もない',
    '好機が訪れる',
    // 31
    '何も起こらない',
];

// Generate random color theme.
function makeColorTheme(): IColorTheme {
    // title
    const th = Math.floor(Math.random() * 360);
    const titleBG = `hsl(${th}, 100%, 89%)`;
    const titleFG = `#000000`;
    // normal
    const h = Math.floor(th + Math.random() * 160 - 80) % 360;
    const background = `hsl(${h}, 100%, 94%)`;
    const text = `#000000`;

    return {
        background,
        text,
        titleBG,
        titleFG,
    };
}
