const Card = ({ card, chooseCard }) => {
  return (
    <div
      className="card"
      onClick={() => chooseCard(card)}
    >
      <div className="card-image">
        {card.display}
      </div>
      <div className="card-title">
        {card.title}
      </div>
    </div>
  )
}

export default Card;