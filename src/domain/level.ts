class Level {
    #level_num: number;

    constructor() {
        this.#level_num = 1;
    }

    get level(): number {
        return this.#level_num;
    }

    set level(value: number) {
        this.#level_num = value;
    }

    increaseLevel(): void {
        this.#level_num++;
    }
}

export default Level;