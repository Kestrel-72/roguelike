import Character from "../character.js";
import Consumable from "./consumable.js";

class Food extends Consumable {
    #healPercent: number;

    constructor(type: keyof typeof FoodType) {
        const template = FoodType[type];
        super(template.id, template.name);
        this.#healPercent = template.healPercent;
    }

    get healPercent(): number {
        return this.#healPercent;
    }

    use(character: Character): void {
        character.heal(this.#healPercent);
    }
}

const FoodType = {
    SANDWICH: {
        id: 1,
        name: "Sandwich",
        healPercent: 3
    },
} as const;

export default Food;