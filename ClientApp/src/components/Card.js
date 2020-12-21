import React, { useState } from 'react';
import { CardEntity } from '../data/cards';

function Card ({ cardId, setSelection }) {
    let card = new CardEntity(cardId);
    let art = require(`../assets/cards/${card.card.art}`);
    const [selected, setSelected] = useState(false);

    return (
        <div
            className="card"
            onClick={() => {
                setSelection(card);
                setSelected(true);  // Fix this not working
                alert(selected);
            }}
            style={{
                backgroundImage: `url(${art})`,
                borderColor:
                    card.card.rarity === "Legendary" ? "pink" :
                    card.card.rarity === "Gold" ? "gold" :
                    card.card.rarity === "Silver" ? "silver" : "#6c4030",
                transform: `translateY(${selected ? -20 : 0}px)`
            }} >
            <div style={{
                color:
                    card.attack > card.card.baseAttack ? "#ff0" :
                    card.attack < card.card.baseAttack ? "#f00" : "#fff"
            }}>{card.attack}</div>
            <div style={{
                color:
                    card.health > card.card.baseHealth ? "#ff0" :
                    card.health < card.card.baseHealth ? "#f00" : "#fff"
            }}>{card.health}</div>
        </div>
    );
}

export default Card;