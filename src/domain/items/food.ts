import Item from "./item.js";
import Character from "../character.js";

abstract class Food extends Item {
    #healPercent: number;

    constructor(name: string, healPercent: number) {
        super(name);
        this.#healPercent = healPercent;
    }

    get healPercent(): number {
        return this.#healPercent;
    }

    eat(character: Character) {
        character.heal(this.#healPercent);
    }
}

export default Food;