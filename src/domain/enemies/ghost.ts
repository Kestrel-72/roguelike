import Enemy from "./enemy.js";
import stats from "./stats.js";

class Ghost extends Enemy {
    constructor() {
        super(
            stats.health.Low,
            stats.strength.Low,
            stats.agility.High,
            stats.hostility.Low,
            stats.speed.Normal,
            "white",
            "g",
            "Ghost"
        );
    }

}

export default Ghost;