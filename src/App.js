import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Title from "./components/Title";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState('');

  const handleGameOver = () => {
    setScore(0);
    setDifficulty('');
    setGameOver(true);
  };

  useEffect(() => {
    if (difficulty) {
      setGameOver(false);
    }
  }, [difficulty]);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} gameOver={gameOver} handleGameOver={handleGameOver} />
      <main>
        {gameOver && <Title setDifficulty={setDifficulty} />}
        {!gameOver && <Cards score={score} setScore={setScore} bestScore={bestScore} difficulty={difficulty} setBestScore={setBestScore} />}
      </main>
    </div>
  );
}

export default App;
