import Enemy from "./enemy.js";
import stats from "./stats.js";

class Zombie extends Enemy {
    constructor() {
        super(
            "Zombie", 
            stats.health.High, 
            stats.strength.Medium, 
            stats.agility.Low,
            stats.hostility.Medium,
            stats.speed.Normal,
            "green",
            "z"
        )
    }

}

export default Zombie;