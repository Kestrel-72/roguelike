import Item from "./item.js";
import Character from "../character.js";

abstract class Food extends Item {
    #healPercent: number;

    constructor(id: number, name: string, healPercent: number) {
        super(id, name, 9);
        this.#healPercent = healPercent;
    }

    get healPercent(): number {
        return this.#healPercent;
    }

    eat(character: Character): void {
        character.heal(this.#healPercent);
    }
}

export default Food;