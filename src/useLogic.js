import { useState, useRef, useEffect } from 'react';

const useLogic = () => {

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
        setText('');
        setCount(0);
        textareaRef.current.disabled = false;  
        textareaRef.current.focus();
    };

    const changeText = (value) => {
        setText(value);
    }

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

         return [text, timer, isRunning, count, textareaRef, startGame, changeText]

}

export default useLogic;