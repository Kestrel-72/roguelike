import Character from "./character.js";
import Scroll from "./scroll.js";

class ScrollOfHealth extends Scroll {
    #amount: number;

    constructor() {
        super("Scroll of Health");
        this.#amount = 10;
    }

    get amount(): number {
        return this.#amount;
    }

    use(character: Character): void {
        character.increaseMaxHealth(this.#amount);
    }
}

export default ScrollOfHealth;