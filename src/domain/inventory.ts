import Character from "./character.js";
import Weapon from "./items/weapon.js";
import Item from "./items/item.js";
import Consumable from "./items/consumable.js";

class Inventory {
    #itemSlots: ItemSlot[] = [];
    #numSlots: number;
    #character: Character;

    constructor(character: Character) {
        this.#numSlots = 9;
        this.#character = character;
    }

}

class ItemSlot {
    #item: Item | null;
    #quantity: number;

    constructor() {
        this.#item = null;
        this.#quantity = 0;
    }

    // add items into the slot. If final quantity exceeds stack_size, discard the rest
    addItem(item: Item, addQuantity: number = 1): void {
        if (this.#item === null) {
            this.#item = item;
            this.#quantity = addQuantity;
        } else if (this.#item.id === item.id) {
            const spaceLeft = this.#item.stack_size - this.#quantity;
            this.#quantity += Math.min(addQuantity, spaceLeft);
        }
    }

    useItem(character: Character): void {
        if (this.#item instanceof Weapon) {
            this.#equipWeapon(this.#item, character);
        }
        if (this.#item instanceof Consumable) {
            this.#consume(this.#item, character);
        }
    }

    #equipWeapon(weapon: Weapon, character: Character) {
        const tmp = character.equippedWeapon;
        character.equippedWeapon = weapon;
        this.#item = tmp;
    }

    #consume(consumable: Consumable, character: Character) {
        consumable.use(character);
        this.#quantity--;
        if (this.#quantity == 0) this.#item = null;
    }
}

export default Inventory;