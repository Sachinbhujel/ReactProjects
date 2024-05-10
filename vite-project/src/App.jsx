import './App.css'
import React from 'react';
import {useTimer} from 'use-timer';

function App() {
  let {time, start, pause, reset, status} = useTimer();

    return (
        <>
            <div class="main">
                <h3>Start Time : {time}</h3>
                <div class="container">
                    <button onClick={start} id="start">Start</button>
                    <button onClick={pause}>Pause</button>
                    <button onClick={reset} id="reset">Reset</button>
                </div>
                {status === "RUNNING" && <p>Running....</p>}
            </div>
        </>
    )
}


export default App
