abstract class Entity {
    #currentHealth: number;
    #maxHealth: number;
    #strength: number;
    #agility: number;
    // #position: Position;
    #speed: number;
    #color: string;
    #symbol: string;
    #type: string;

    constructor(
        maxHealth: number, strength: number, 
        agility: number, speed: number,
        color: string, symbol: string, name: string) {

        this.#currentHealth = maxHealth;
        this.#maxHealth = maxHealth;
        this.#strength = strength;
        this.#agility = agility;
        this.#speed = speed;
        this.#color = color;
        this.#symbol = symbol;
        this.#type = name;
    }

    get currentHealth(): number {
        return this.#currentHealth;
    }

    get maxHealth(): number {
        return this.#maxHealth;
    }

    set maxHealth(value: number) {
        this.#maxHealth = value;
    }

    get agility(): number {
        return this.#agility;
    }

    set agility(value: number) {
        this.#agility = value;
    }

    get strength(): number {
        return this.#strength;
    }

    set strength(value: number) {
        this.#strength = value;
    }

    abstract get totalStrength(): number;

    heal(amount: number) {
        if (this.#currentHealth + amount > this.maxHealth) {
            this.#currentHealth = this.maxHealth;
        } else {
            this.#currentHealth += amount;
        }
    }

    increaseMaxHealth(amount: number) {
        this.#maxHealth += amount;
        this.#currentHealth += amount;
    }

    attack(defender: Entity): number {
        const hitChance: number = Math.max(0, 90 + (this.#agility - defender.agility));
        const missChance: number = Math.floor(Math.random() * 100);
        const isHit: boolean = hitChance > missChance ? true : false;
        console.log(`Hit chance: ${hitChance}, Miss chance: ${missChance}`);

        if (!isHit) {
            if (this.#type === "Player") {
                console.log(`You missed ${defender.#type}!`);
            } else {
                console.log(`${this.#type} missed you!`);
            }
            
            return 0;
        }

        const damage = this.totalStrength;
        defender.#takeDamage(damage);

        if (this.#type === "Player") {
            console.log(`You hit ${defender.#type} for ${damage} damage.`);
        } else {
            console.log(`${this.#type} hits you for ${damage} damage.`);
        }
        
        return damage;
    }

    #takeDamage(amount: number) {
        this.#currentHealth -= amount;
        if (this.#currentHealth <= 0) this.die();
    }

    abstract die(): void;
}

export default Entity;