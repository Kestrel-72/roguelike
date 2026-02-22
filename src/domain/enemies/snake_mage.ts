import Enemy from "./enemy.js";
import stats from "./stats.js";

class SnakeMage extends Enemy {
    constructor() {
        super(
            "Vampire", 
            stats.health.Low, 
            stats.strength.Low, 
            stats.agility.VeryHigh,
            stats.hostility.High,
            stats.speed.Normal,
            "white",
            "s"
        )
    }

}

export default SnakeMage;