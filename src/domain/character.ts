class Character {
    #currentHealth: number;
    #maxHealth: number;
    #strength: number;
    #agility: number;
    // #position: Position;
    // #equippedWeapon: Weapon;
    // #inventory: Inventory;

    constructor() {
        this.#maxHealth = 100;
        this.#currentHealth = 100;
        this.#strength = 10;
        this.#agility = 10;
    }

    takeDamage(amount: number) {
        this.#currentHealth -= amount;
    }

    heal(amount: number) {
        if (this.#currentHealth + amount > this.#maxHealth) {
            this.#currentHealth = this.#maxHealth;
        } else {
            this.#currentHealth += amount;
        }
    }

    increaseMaxHealth(amount: number) {
        this.#maxHealth += amount;
        this.#currentHealth += amount;
    }

    decreaseMaxHealth(amount: number) {
        this.#maxHealth = this.#maxHealth > amount ? this.#maxHealth - amount : 1;
    }

    increaseStrength(amount: number) {
        this.#strength += amount;
    }

    increaseAgility(amount: number) {
        this.#agility += amount;
    }

}

export default Character;