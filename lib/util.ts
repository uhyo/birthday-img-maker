/**
 * Destructively shuffle the given array.
 */
export function shuffle<T>(arr: T[]): T[] {
    const len = arr.length;
    for (let i = len; i>0; i--){
        const idx = Math.floor(Math.random() * i);
        const tmp = arr[idx];
        arr[idx] = arr[i-1];
        arr[i-1] = tmp;
    }
    return arr;
}
