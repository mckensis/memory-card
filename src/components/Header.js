import { BiExit } from 'react-icons/bi';

const Header = ({ score, bestScore, gameOver, handleGameOver }) => {
  return (
    <header>
      <img src="./images/logo.png" alt="" />
      <h1>Memory Game</h1>
      {!gameOver && <button onClick={() => handleGameOver()}><BiExit title="Return to title screen"/></button>}
      <ul>
        <li>Best Score: {bestScore}</li>
        <li>Current Score: {score}</li>
      </ul>
    </header>
  )
}

export default Header;