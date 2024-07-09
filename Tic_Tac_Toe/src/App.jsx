import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='btn_row'>
        <Btn value="1"/>
        <Btn value="2"/>
        <Btn value="3"/>
      </div>

      <div className='btn_row'>
        <Btn value="4"/>
        <Btn value="5"/>
        <Btn value="6"/>
      </div>

      <div className='btn_row'>
        <Btn value="7"/>
        <Btn value="8"/>
        <Btn value="9"/>
      </div>
    </>
  )
}


function Btn({value}) {
  return <button className="square">{value}</button>;
}

export default App
