abstract class Item {
    #id: number;
    #name: string;
    #stack_size: number;

    constructor(id: number, name: string, stack_size: number = 1) {
        this.#id = id;
        this.#name = name; 
        this.#stack_size = stack_size;
    }

    get id(): number {
        return this.#id;
    }

    get name(): string {
        return this.#name;
    }

    get stack_size(): number {
        return this.#stack_size;
    }
}

export default Item;