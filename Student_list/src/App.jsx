import React, { useState } from 'react';
import './App.css';
import Students from './Students';
import data from './Data';

const App = () => {
  const [count, setCount] = useState(data.length);
  const [people, setPeople] = useState(data);

  function removeAll() {
    setCount(0);
    setPeople([]);
  }

  return (
    <div className="outer_container">
      <h4 className='total_students'>Total Students {count}</h4>
      <Students people={people} />
      <button onClick={removeAll}>Remove All</button>
    </div>
  );
}

export default App;
