import Character from "./character.js";
import Scroll from "./scroll.js";

class ScrollOfStrength extends Scroll {
    #amount: number;

    constructor() {
        super("Scroll of Strength");
        this.#amount = 1;
    }

    get amount(): number {
        return this.#amount;
    }

    use(character: Character): void {
        character.increaseStrength(this.#amount);
    }
}

export default ScrollOfStrength;