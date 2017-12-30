import {
    observable,
} from 'mobx';
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
    @observable public month: string[] = (new Array(12)).fill('');
    /**
     * Title of each day.
     */
    @observable public day: string[] = (new Array(31)).fill('');

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
