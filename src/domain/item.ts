abstract class Item {
    #name: string;

    constructor(name: string) {
       this.#name = name; 
    }

    get name(): string {
        return this.#name;
    }
}

export default Item;