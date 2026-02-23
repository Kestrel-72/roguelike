import Weapon from "./items/weapon.js";
import Entity from "./entity.js";
import Inventory from "./inventory.js";

class Character extends Entity {
    #equippedWeapon: Weapon | null;
    #inventory: Inventory;

    constructor() {
        super(100, 10, 10, 1, "blue", "p", "Player");
        this.#equippedWeapon = null;
        this.#inventory = new Inventory(this);
    }

    get totalStrength(): number {
        return this.#equippedWeapon ? 
        this.strength + this.#equippedWeapon.strengthBoost : this.strength;
    }
    
    get equippedWeapon(): Weapon | null {
        return this.#equippedWeapon;
    }

    set equippedWeapon(weapon: Weapon | null) {
        this.#equippedWeapon = weapon;
    }

    decreaseMaxHealth(amount: number) {
        this.maxHealth = this.maxHealth > amount ? this.maxHealth - amount : 1;
    }

    increaseStrength(amount: number) {
        this.strength += amount;
    }

    increaseAgility(amount: number) {
        this.agility += amount;
    }

    die(): void {
        
    }

}

export default Character;