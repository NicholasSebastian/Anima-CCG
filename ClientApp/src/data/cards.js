"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardEntity = void 0;
var CardEntity = /** @class */ (function () {
    function CardEntity(cardIndex) {
        this.card = CardCollection[cardIndex];
        this.health = this.card.baseHealth;
        this.attack = this.card.baseAttack;
        this.ward = false;
        this.evolved = false;
    }
    return CardEntity;
}());
exports.CardEntity = CardEntity;
var CardCollection = [
    {
        "name": "Dog",
        "art": "dog.jfif",
        "rarity": "Bronze",
        "playPoints": 1,
        "baseHealth": 1,
        "baseAttack": 2,
        "description": "Floof, Mlem, and Bamboozle.",
        "onEvolve": function () { console.log("evolve"); },
        "onEvolveDescription": "+2 Health and Attack."
    }
];
exports.default = CardCollection;
//# sourceMappingURL=cards.js.map