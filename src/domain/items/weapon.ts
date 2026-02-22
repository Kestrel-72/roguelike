import Item from "./item.js";

class Weapon extends Item {
    #strengthBonus: number;

    constructor(type: keyof typeof WeaponType) {
        const template = WeaponType[type];
        super(template.name);
        this.#strengthBonus = template.strengthBonus;
    }

    get strengthBonus(): number {
        return this.#strengthBonus;
    }
}

const WeaponType = {
    DAGGER: {
        name: "Dagger",
        strengthBonus: 3
    },
    SWORD: {
        name: "Sword",
        strengthBonus: 5
    },
    AXE: {
        name: "Axe",
        strengthBonus: 10
    }
} as const;

export default Weapon;