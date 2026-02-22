import Enemy from "./enemy.js";
import stats from "./stats.js";

class Ogre extends Enemy {
    constructor() {
        super(
            "Ogre", 
            stats.health.VeryHigh, 
            stats.strength.VeryHigh, 
            stats.agility.Low,
            stats.hostility.Medium,
            stats.speed.High,
            "yellow",
            "O"
        )
    }

}

export default Ogre;