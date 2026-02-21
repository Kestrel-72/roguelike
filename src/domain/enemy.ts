class Enemy {
    #type: string;
    #health: number;
    #strength: number;
    #agility: number;
    #hostility: number;
    
    constructor(type: keyof typeof EnemyType) {
        const template = EnemyType[type];
        
        this.#type = template.name;
        this.#health = template.health;
        this.#strength = template.strength;
        this.#agility = template.agility;
        this.#hostility = template.hostility;
    }

    // attack
}

enum health {
    Low = 10,
    Medium = 20,
    High = 40,
    VeryHigh = 60,
}

enum strength {
    Low = 5,
    Medium = 10,
    High = 15,
    VeryHigh = 25
}

enum agility {
    Low = 5,
    Medium = 10,
    High = 15,
    VeryHigh = 20
}

enum hostility {
    Low = 3,
    Medium = 5,
    High = 7
}

enum speed {
    Normal = 1,
    High = 2
}

const EnemyType = {
    ZOMBIE: {
        name: 'Zombie',
        health: health.High,
        strength: strength.Medium,
        agility: agility.Low,
        hostility: hostility.Medium,
        speed: speed.Normal,
        color: 'green',
        symbol: 'z',
    },
    VAMPIRE: {
        name: 'Vampire',
        health: health.High,
        strength: strength.Medium,
        agility: agility.High,
        hostility: hostility.High,
        speed: speed.Normal,
        color: 'red',
        symbol: 'v',
    },
    GHOST: {
        name: 'Ghost',
        health: health.Low,
        strength: strength.Low,
        agility: agility.High,
        hostility: hostility.Low,
        speed: speed.Normal,
        color: 'white',
        symbol: 'g',
    },
    OGRE: {
        name: 'Ogre',
        health: health.VeryHigh,
        strength: strength.VeryHigh,
        agility: agility.Low,
        hostility: hostility.Medium,
        speed: speed.High,
        color: 'yellow',
        symbol: 'O',
    },
    SNAKE_MAGE: {
        name: 'Snake Mage',
        health: health.Low,
        strength: strength.Low,
        agility: agility.VeryHigh,
        hostility: hostility.High,
        speed: speed.Normal,
        color: 'white',
        symbol: 's',
    },
} as const;


export default Enemy;