import Character from "../character.js";
import Item from "./item.js";

abstract class Consumable extends Item {
    constructor(id: number, name: string) {
        super(id, name, 9);
    }
    
    abstract use(character: Character): void;
}

export default Consumable;