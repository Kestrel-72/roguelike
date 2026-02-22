import Character from "../character.js";
import Scroll from "./scroll.js";

class ScrollOfHealth extends Scroll {
    #maxHealthBoost: number;

    constructor() {
        super("Scroll of Health");
        this.#maxHealthBoost = 10;
    }

    get maxHealthBoost(): number {
        return this.#maxHealthBoost;
    }

    use(character: Character): void {
        character.increaseMaxHealth(this.#maxHealthBoost);
    }
}

export default ScrollOfHealth;