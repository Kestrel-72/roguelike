import Character from "./character.js";
import Weapon from "./items/weapon.js";
import Item from "./items/item.js";
import Consumable from "./items/consumable.js";

class Inventory {
    #itemSlots: ItemSlot[];
    #character: Character;

    constructor(character: Character) {
        this.#itemSlots = [];
        for (let i = 0; i < 9; i++) {
            this.#itemSlots.push(new ItemSlot(i));
        }

        this.#character = character;
    }

    get itemSlots() {
        return this.#itemSlots;
    }

    addItem(item: Item, quantity: number): void {
        // if there is a slot with this item, add there
        const slotWithItem = this.#itemSlots.find(itemSlot => itemSlot.item?.id === item.id);
        if (slotWithItem) {
            slotWithItem.addItemToSlot(item, quantity);
            return;
        }
        
        // if there's no slot with this item, find empty slot and add there
        const emptySlot = this.#itemSlots.find(itemSlot => itemSlot.item === null);
        if (emptySlot) {
            emptySlot.addItemToSlot(item, quantity);
            return;
        }
    }
}

class ItemSlot {
    #id: number;
    #item: Item | null;
    #quantity: number;

    constructor(id: number) {
        this.#id = id;
        this.#item = null;
        this.#quantity = 0;
    }

    get item(): Item | null {
        return this.#item;
    }

    // add items into the slot. If final quantity exceeds stack_size, discard the rest
    addItemToSlot(item: Item, addQuantity: number = 1): void {
        if (this.#item === null) {
            this.#item = item;
            this.#quantity = addQuantity;
        } else if (this.#item.id === item.id) {
            const spaceLeft = this.#item.stack_size - this.#quantity;
            this.#quantity += Math.min(addQuantity, spaceLeft);
        }
        console.log(`Added ${addQuantity} ${item.name} to slot ${this.#id}`);
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