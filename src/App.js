import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    const [text, setText] = useState("");
    const [timer, setTimer] = useState(5);

    const wordCounter = (text) => {
      const wordArr = text.trim().split(' ');
      return wordArr.filter(word => word !== '').length;
    };

    useEffect(() => { 
      if (timer === 0) {
        return;
      }
       setTimeout(() => {
         setTimer(prevState => prevState -1)
       }, 1000);
       }, [timer]);

  return (
    <>
        <h1>Title</h1>
        <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <h4>Time left: {timer}</h4>
        <button onClick={() => wordCounter(text)}>Start</button>
        <h1>Words: 0</h1>
    </>
  );
}

export default App;
