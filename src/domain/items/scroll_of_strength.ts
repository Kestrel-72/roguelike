import Character from "../character.js";
import Scroll from "./scroll.js";

class ScrollOfStrength extends Scroll {
    #strengthBoost: number;

    constructor() {
        super(13, "Scroll of Strength");
        this.#strengthBoost = 1;
    }

    get strengthBoost(): number {
        return this.#strengthBoost;
    }

    use(character: Character): void {
        character.increaseStrength(this.#strengthBoost);
    }
}

export default ScrollOfStrength;