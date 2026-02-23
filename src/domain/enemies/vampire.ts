import Enemy from "./enemy.js";
import stats from "./stats.js";

class Vampire extends Enemy {
    #elusive: boolean;

    constructor() {
        super(
            stats.health.High,
            stats.strength.Medium,
            stats.agility.High,
            stats.hostility.High,
            stats.speed.Normal,
            "red",
            "v",
            "Vampire", 
        );
        
        this.#elusive = true;
    }
    
}

export default Vampire;