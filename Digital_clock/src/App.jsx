import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    let timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeId);
    }
  }, []);

  function showTime(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const am_pm = hours > 12? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds} ${am_pm}`;

  }


  return (
    <>
      <div className="main">
        <div className="clock">
          <span>{showTime()}</span>
        </div>
      </div>
    </>
  )
}

export default App
