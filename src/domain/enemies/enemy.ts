import Character from "../character.js";

abstract class Enemy {
    #type: string;
    #health: number;
    #strength: number;
    #agility: number;
    #hostility: number;
    #speed: number;
    #color: string;
    #symbol: string;
    
    constructor(type: string, health: number, strength: number, 
        agility: number, hostility: number, speed: number,
        color: string, symbol: string) {

        this.#type = type
        this.#health = health;
        this.#strength = strength;
        this.#agility = agility;
        this.#hostility = hostility;
        this.#speed = speed;
        this.#color = color;
        this.#symbol = symbol;
    }
    
}

export default Enemy;