import Character from "../character.js";
import Consumable from "./consumable.js";

class Scroll extends Consumable {
    #template: typeof ScrollType[keyof typeof ScrollType];

    constructor(type: keyof typeof ScrollType) {
        const template = ScrollType[type];
        super(template.id, template.name);
        this.#template = template;
    }

    use(character: Character) {
        this.#template.use(character);
    }
}

const ScrollType = {
    AGILITY: {
        id: 11,
        name: "Scroll of Agility",
        boostAmount: 1,
        use(character: Character) {
            character.increaseAgility(this.boostAmount);
        }
    },
    STRENGTH: {
        id: 12,
        name: "Scroll of Strength",
        boostAmount: 1,
        use(character: Character) {
            character.increaseStrength(this.boostAmount);
        }
    },
    HEALTH: {
        id: 13,
        name: "Scroll of Health",
        boostAmount: 10,
        use(character: Character) {
            character.increaseMaxHealth(this.boostAmount);
        }
    }
}

export default Scroll;