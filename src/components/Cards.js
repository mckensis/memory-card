import { useState } from "react";
import getCards from '../getCards';
import Card from "./Card";

const Cards = ({ score, difficulty, bestScore, setScore, setBestScore }) => {
  const [shuffled, setShuffled] = useState(false);
  const [cards, setCards] = useState(getCards(difficulty));

  const MAX_SCORE = cards.length;

  // Randomise the array indexes
  const shuffleCards = (cards) => {
    let shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const chooseCard = (card) => {
    const cardAlreadyChosen = card.chosen;
    const cardsCopy = [...cards];
    let newScore;
    
    if (cardAlreadyChosen) {
      newScore = 0;
      //Reset all cards
      cardsCopy.map((copyCard) => copyCard.chosen === true ? copyCard.chosen = false : copyCard);
    }
    if (!cardAlreadyChosen) {
      newScore = score + 1;
      // Mark the card as chosen
      cardsCopy.map((copyCard) => copyCard.id === card.id ? copyCard.chosen = true : copyCard);
    }
    if (score === MAX_SCORE) return;
    
    setScore(newScore);
    if (newScore > bestScore) setBestScore(newScore);
    setCards(cardsCopy);

    setShuffled(false);
    Cards();
  };

  const playRound = () => {
    if (!shuffled) {
      shuffleCards(cards);
      setShuffled(true);
      return;
    }
  }

  const Cards = () => {
    playRound();
    return cards.map(card => (
      <Card key={card.id} card={card} chooseCard={chooseCard} />
    ))
  }

  return (
    <>
      {Cards()}
    </>
  )
}

export default Cards