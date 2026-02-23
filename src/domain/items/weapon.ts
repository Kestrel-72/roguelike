import Item from "./item.js";

class Weapon extends Item {
    #strengthBoost: number;

    constructor(type: keyof typeof WeaponType) {
        const template = WeaponType[type];
        super(template.id, template.name, 1);
        this.#strengthBoost = template.strengthBoost;
    }

    get strengthBoost(): number {
        return this.#strengthBoost;
    }
}

const WeaponType = {
    DAGGER: {
        id: 21,
        name: "Dagger",
        strengthBoost: 3
    },
    SWORD: {
        id: 22,
        name: "Sword",
        strengthBoost: 5
    },
    AXE: {
        id: 23,
        name: "Axe",
        strengthBoost: 10
    }
} as const;

export default Weapon;