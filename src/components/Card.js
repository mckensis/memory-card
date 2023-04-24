const Card = ({ card, chooseCard }) => {
  return (
    <div className="card" onClick={() => chooseCard(card)}>
      <div className="image-container">
        <img className="card-image" src={card.display} alt="" />
      </div>
      <div className="card-title">
        {card.title}
      </div>
    </div>
  )
}

export default Card;