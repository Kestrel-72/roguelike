import Character from "../character.js";
import Scroll from "./scroll.js";

class ScrollOfAgility extends Scroll {
    #agilityBoost: number;

    constructor() {
        super("Scroll of Agility");
        this.#agilityBoost = 1;
    }

    get agilityBoost(): number {
        return this.#agilityBoost;
    }

    use(character: Character): void {
        character.increaseAgility(this.#agilityBoost);
    }
}

export default ScrollOfAgility;