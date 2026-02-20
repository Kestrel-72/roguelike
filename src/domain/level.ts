class Level {
    #level_num: number;

    constructor() {
        this.#level_num = 1;
    }

    get level_num(): number {
        return this.#level_num;
    }

    set level_num(value: number) {
        this.#level_num = value;
    }

    increaseLevelNum(): void {
        this.#level_num++;
    }
}

export default Level;