import Character from "./character.js";
import Scroll from "./scroll.js";

class ScrollOfAgility extends Scroll {
    #amount: number;

    constructor() {
        super("Scroll of Agility");
        this.#amount = 1;
    }

    get amount(): number {
        return this.#amount;
    }

    use(character: Character): void {
        character.increaseAgility(this.#amount);
    }
}

export default ScrollOfAgility;