import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  let [timer, setTimer] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let intervalRef = useRef(null);

  useEffect(()=>{
    if(isActive){
      intervalRef.current = setInterval(()=>{
        setTimer(preValue => preValue + 1);
      }, 1000);
    } else{
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);

  }, [isActive])


  function handleStart(){
    setIsActive(true);
  }


  function handlePause(){
    setIsActive(false);
  }


  function handleReset(){
    setIsActive(false);
    setTimer(0);
  }

  function showTimer(totalSeconds){
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours > 0 ? `${hours} hours ` : ''}${minutes > 0 ? `${minutes} minutes ` : ''}${seconds} seconds`;
  }

  return (
    <div className='main'>
      <h3>{showTimer(timer)}</h3>
      <div className='buttons'>
        <button onClick={handleStart} id="start">Start</button>
        <button onClick={handlePause} id='pause'>Pause</button>
        <button onClick={handleReset} id='reset'>Reset</button>
      </div>
    </div>
  );
}

export default App