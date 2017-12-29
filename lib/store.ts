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

    public setTitle(title: string): void {
        this.title = title;
    }
}
