import { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Card";

const Cards = ({ score, bestScore, setScore, setBestScore }) => {
  
  const [shuffled, setShuffled] = useState(false);
  const [cards, setCards] = useState([
    {
      id: uuid(),
      title: 'The Letter A',
      display: 'A',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter B',
      display: 'B',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter C',
      display: 'C',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter D',
      display: 'D',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter E',
      display: 'E',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter F',
      display: 'F',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter G',
      display: 'G',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter H',
      display: 'H',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter I',
      display: 'I',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter J',
      display: 'J',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter K',
      display: 'K',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'The Letter L',
      display: 'L',
      chosen: false,
    }
  ]);

  const shuffleCards = (cards) => {
    let shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const chooseCard = (card) => {
    const cardsCopy = [...cards];
    if (!card.chosen) {
      const newScore = score + 1
      setScore(newScore);
      if (newScore > bestScore) setBestScore(newScore);
      card.chosen = true;
      cardsCopy.map((copyCard) => copyCard.id === card.id ? copyCard = card : copyCard);
      setShuffled(false);
      setCards(cardsCopy);
      playRound();
      console.log(cards);
      return;
    }
    if (card.chosen) {
      setScore(0);
      cardsCopy.map((copyCard) => copyCard.chosen === true ? copyCard.chosen = false : copyCard);
      setShuffled(false);
      setCards(cardsCopy);
      playRound();
      console.log(cards);
    }    
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