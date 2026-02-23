import Entity from "../entity.js";

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

    }
    
}

export default Enemy;