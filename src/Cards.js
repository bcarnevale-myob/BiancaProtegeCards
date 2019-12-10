import React from 'react';
import CardList from './cards.json';

const Cards = () => {

    return (
        CardList.cards.map(card =>
            <div>
                <h2>{card.number}: {card.heading}</h2>
                <h3>Topics:</h3>
                <p>{card.topics.map(topic =>
                    "- " + topic + " "
                )}</p>
                <h3>Acceptance Criteria:</h3>
                <p>{card.acceptanceCriteria.map(ac =>
                    "- " + ac + " "
                )}</p>
            </div>
        )
    )
}

export default Cards;