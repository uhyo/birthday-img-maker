import {
    observable,
} from 'mobx';

import {
    shuffle,
} from './util';

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
            this.month[month] = str;
        }
    }
    /**
     * Set a new string of a day.
     */
    public setOneDay(str: string, day: number): void {
        if (0 <= day && day < 31){
            this.day[day] = str;
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
