import Entity from "../entity.js";
import Loot from "../items/loot.js";
import Treasure from "../items/treasure.js";

abstract class Enemy extends Entity {
    #hostility: number;
    
    constructor(
        maxHealth: number, strength: number, agility: number, hostility: number, 
        speed: number, color: string, symbol: string, type: string) {

        super(maxHealth, strength, agility, speed, color, symbol, type);
        this.#hostility = hostility;
    }

    get totalStrength(): number {
        return this.strength;
    }

    die(): void {
        console.log(`${this.type} dies.`);
        console.log(`${this.type} dropped ${this.#generateTreasure().quantity} treasure!`);
    }

    #generateTreasure(): Loot {
        const quantity = Math.floor(Math.random() * (this.#hostility + this.strength + this.agility + this.maxHealth));
        const loot: Loot = {
            item: new Treasure(),
            quantity: quantity
        }
        
        return loot;
    } 
    
}

export default Enemy;