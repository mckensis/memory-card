const Header = ({ score, bestScore }) => {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <ul>
        <li>Best Score: {bestScore}</li>
        <li>Current Score: {score}</li>
      </ul>
    </header>
  )
}

export default Header;