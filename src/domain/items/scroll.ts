import Character from "../character.js";
import Item from "./item.js";

abstract class Scroll extends Item {
    constructor(name: string) {
        super(name);
    }

    abstract use(character: Character): void;
}

export default Scroll;