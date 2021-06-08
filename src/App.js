import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [text, setText] = useState("");
    const [timer, setTimer] = useState(5);
    const [isRunning, setIsRunning] = useState(false);
    const [count, setCount] = useState(0);
 
    const wordCounter = (text) => {
      const wordArr = text.trim().split(' ');
      const wordCount = wordArr.filter(word => word !== '').length;
      setCount(wordCount);
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
        <h1>Title</h1>
        <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <h4>Time left: {timer}</h4>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <h1>Words: {count}</h1>
    </>
  );
}

export default App;
