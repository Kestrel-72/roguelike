import Level from "./level";

class GameSession {
    #level: Level;

    constructor() {
        this.#level = new Level();
    }

}

export default GameSession;