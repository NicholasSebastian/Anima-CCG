import React, { useState } from 'react';
import Card from '../components/Card';

function Game() {
    const [cardsInPlay, setCardsInPlay] = useState([null, 0, null, null, null]);
    const [enemyCardsInPlay, setEnemyCardsInPlay] = useState([0, 0, null, null, null]);
    const [selected, setSelected] = useState(null);

    const CardSpace = ({ inPlay }) =>
        <div className="card-space">
            {inPlay.map((card, i) => {
                if (card != null) return <Card key={i} cardId={card} setSelection={setSelected} />
            })}
        </div>

    return (
        <div id="game">
            <div className="player-portrait"></div>
            <CardSpace inPlay={enemyCardsInPlay} />
            <CardSpace inPlay={cardsInPlay} />
            <div className="player-portrait"></div>
        </div>
    );
}

export default Game;