import { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <main>
        <Cards score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore} />
      </main>
    </div>
  );
}

export default App;
