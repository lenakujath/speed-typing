import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {

  const STARTING_TIME = 10;

    const [text, setText] = useState("");
    const [timer, setTimer] = useState(STARTING_TIME);
    const [isRunning, setIsRunning] = useState(false);
    const [count, setCount] = useState(0);
    const textareaRef = useRef(null);

    const wordCounter = (text) => {
      const wordArr = text.trim().split(' ');
      const wordCount = wordArr.filter(word => word !== '').length;
      setCount(wordCount);
    };

    const startGame = () => {
        setIsRunning(true);
        setTimer(STARTING_TIME);
        setCount(0);
        textareaRef.current.disabled = false;
        textareaRef.current.focus();
    };
    
    useEffect(() => { 
      if (timer > 0 && isRunning){
        setTimeout(() => {
          setTimer(prevState => prevState -1)
        }, 1000);
      } else if (timer === 0) {
        setIsRunning(false);
        wordCounter(text);
      }
       }, [isRunning, timer]);

  return (
    <>
        <h1>Type as many words as you can</h1>
        <textarea
          ref={textareaRef}
          disabled={!isRunning}
          value={text}
          onChange={(e) => setText(e.target.value)}
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
