import React from 'react';
import './App.css';
import useLogic from './useLogic';

function App() {

  //commit checks

  const [text, timer, isRunning, count, textareaRef, startGame, changeText] = useLogic();

  return (
    <>
        <h1>Type as many words as you can</h1>
        <textarea
          ref={textareaRef}
          disabled={!isRunning}
          value={text}
          onChange={(e) => changeText(e.target.value)}
        />
        <h4>Time left: {timer}</h4>
        <button 
          disabled={isRunning}
          onClick={startGame}
        >
           Start
        </button>
        <h1>Words: {count}</h1>
    </>
  );
}

export default App;
