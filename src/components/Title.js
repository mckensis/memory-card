import React from 'react'

const Title = ({ setDifficulty }) => {
  return (
    <section className="title">
      <section className="rules">
        <h2>Rules:</h2>
        <ul>
          <li>Choose a difficulty below to start the game</li>
          <li>Feeling like a Kevin? Go for Easy mode, buddy.</li>
          <li>Feeling like an Oscar? Impossible mode is the one for you!</li>
          <li>Click on tiles to gain points</li>
          <li>Do not select the same tile more than once</li>
        </ul>
      </section>
      <section className="difficulty">
        <h2>Choose a difficulty:</h2>
          <section className="buttons">
            <button onClick={() => setDifficulty('easy')}>Easy</button>
            <button onClick={() => setDifficulty('medium')}>Medium</button>
            <button onClick={() => setDifficulty('hard')}>Hard</button>
            <button onClick={() => setDifficulty('impossible')}>Impossible</button>
          </section>
      </section>
    </section>
  )
}

export default Title;