type Rarity = "Bronze" | "Silver" | "Gold" | "Legendary";

interface CardType {
    "name": string,
    "art": string,
    "rarity": Rarity,
    "playPoints": number,
    "baseHealth": number,
    "baseAttack": number,
    "description": string,
    "onEvolve": Function,
    "onEvolveDescription": string
    "onSpawn"?: Function,
    "onSpawnDescription"?: string,
    "onTurnStart"?: Function,
    "onTurnStartDescription"?: string,
    "onTurnEnd"?: Function,
    "onTurnEndDescription"?: string,
    "onDeath"?: Function,
    "onDeathDescription"?: string,
}

export class CardEntity {
    card: CardType;
    health: number;
    attack: number;
    ward: boolean;
    evolved: boolean;

    constructor(cardIndex: number) {
        this.card = CardCollection[cardIndex];
        this.health = this.card.baseHealth;
        this.attack = this.card.baseAttack;
        this.ward = false;
        this.evolved = false;
    }
}

const CardCollection: CardType[] = [
    {
        "name": "Dog",
        "art": "dog.jfif",
        "rarity": "Bronze",
        "playPoints": 1,
        "baseHealth": 1,
        "baseAttack": 2,
        "description": "Floof, Mlem, and Bamboozle.",
        "onEvolve": () => { console.log("evolve"); },
        "onEvolveDescription": "+2 Health and Attack."
    }
]

export default CardCollection;