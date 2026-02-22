import Enemy from "./enemy.js";
import stats from "./stats.js";

class Ghost extends Enemy {
    constructor() {
        super(
            "Ghost", 
            stats.health.Low, 
            stats.strength.Low, 
            stats.agility.High,
            stats.hostility.Low,
            stats.speed.Normal,
            "white",
            "g"
        )
    }

}

export default Ghost;